import { credentials } from '@grpc/grpc-js'
import { RoomRateServiceClient } from '../proto/services/room_rates_grpc_pb'
import { GetRoomTypesRequest } from '../proto/services/room_rates_pb';

const client = new RoomRateServiceClient(
  'localhost:50051',
  credentials.createInsecure()
)

const request = new GetRoomTypesRequest();
request.setHotelCode('HOTELJACKY')
request.setRateCode('BAR')

client.getRoomTypes(request, (err, resp) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }

  console.info(resp.getRoomTypesList())
})