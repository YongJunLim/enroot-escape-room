import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})
const docClient = DynamoDBDocumentClient.from(dbClient)

export async function POST(request: NextRequest) {
  const submittedTimestamp = Date.now()
  const { puzzleId, puzzleName } = await request.json()
  const commandParams = {
    TableName: process.env.TIMINGS_TABLE,
    Item: {
      id: puzzleId.toString(),
      submission_time: submittedTimestamp,
      puzzle_name: puzzleName
    }
  }
  const command = new PutCommand(commandParams);
  const response = await docClient.send(command)
  if (response["$metadata"].httpStatusCode === 200) {
    return NextResponse.json({ success: true })
  } else {
    console.error(response)
    return NextResponse.json({ success: false })
  }
}