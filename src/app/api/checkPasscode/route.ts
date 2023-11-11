import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb"

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})
const docClient = DynamoDBDocumentClient.from(dbClient)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const puzzleId = searchParams.get('puzzleId')
  const puzzleName = searchParams.get('puzzleName')
  console.log(puzzleId, puzzleName)
  var commandParams = {
    TableName: process.env.PASSCODE_TABLE,
    Key: {
      id: puzzleId,
      puzzle_name: puzzleName
    }
  }
  const command = new GetCommand(commandParams)
  const {Item} = await docClient.send(command)
  return Response.json(Item)
}