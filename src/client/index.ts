import { credentials } from '@grpc/grpc-js'
import { RoomRateServiceClient } from '../proto/services/room_rates_grpc_pb'
import { GetRoomRateSettingsRequest, GetRoomTypesRequest } from '../proto/services/room_rates_pb';

const client = new RoomRateServiceClient(
  'localhost:50051',
  credentials.createInsecure()
)

const request = new GetRoomTypesRequest();
request.setHotelCode('HOTELCHRIS')
request.setRateCode('BAR')

client.getRoomTypes(request, (err, resp) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }

  console.info(resp.getRoomTypesList())
})

const requestSettings = new GetRoomRateSettingsRequest();
requestSettings.setHotelCode('HOTELCHRIS')
requestSettings.setRateCode('BAR')
requestSettings.setRoomTypeCode('TD')

client.getRoomRateSettings(requestSettings, (err, resp) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }

  console.info(`${resp.getDate()}: ${resp.getRate1()}`)
})
