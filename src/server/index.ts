import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from '@grpc/grpc-js';
import { RoomRateServiceService } from '../proto/services/room_rates_grpc_pb';
import { GetRoomRateSettingsRequest, GetRoomRateSettingsResponse, GetRoomTypesRequest, GetRoomTypesResponse } from '../proto/services/room_rates_pb';

const getRoomTypes = (
  call: ServerUnaryCall<GetRoomTypesRequest, GetRoomTypesResponse>,
  callback: sendUnaryData<GetRoomTypesResponse>
) => {
  console.info('received call = ', call.request.getHotelCode())

  const response = new GetRoomTypesResponse()

  switch (call.request.getHotelCode()) {
    case 'HOTELCHRIS':
      response.setRoomTypesList(['TD', 'DLX', 'STD', 'EXEC'])
      break
    default:
      response.setRoomTypesList(['TD', 'DLX'])
      break
  }
  
  callback(null, response)
}

const getRoomRateSettings = (
  call: ServerUnaryCall<GetRoomRateSettingsRequest, GetRoomRateSettingsResponse>,
  callback: sendUnaryData<GetRoomRateSettingsResponse>
) => {
  console.info('received call = ', call.request.getRoomTypeCode())

  const response = new GetRoomRateSettingsResponse()

  response.setDate('2022-02-25')
  response.setRate1(100.5)
  response.setRate2(120.9)
  response.setAlgorithm('NONE')

  callback(null, response)
}

const server = new Server();

server.addService(RoomRateServiceService, { getRoomTypes, getRoomRateSettings })

server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
  server.start();

  console.log('server is running on 0.0.0.0:50051');
});

