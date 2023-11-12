import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})
const docClient = DynamoDBDocumentClient.from(dbClient)

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const puzzleId = searchParams.get('puzzleId')
  const puzzleName = searchParams.get('puzzleName')
  const passcode = searchParams.get('passcode')
  var commandParams = {
    TableName: process.env.PASSCODE_TABLE,
    Key: {
      id: puzzleId,
      puzzle_name: puzzleName
    }
  }
  const command = new GetCommand(commandParams)
  const {Item} = await docClient.send(command)
  if (Item.passcode.toString() === passcode) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false })
  }
}