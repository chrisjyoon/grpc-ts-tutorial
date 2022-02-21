import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from '@grpc/grpc-js';
import { RoomRateServiceService } from '../proto/services/room_rates_grpc_pb';
import { GetRoomTypesRequest, GetRoomTypesResponse } from '../proto/services/room_rates_pb';

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

const server = new Server();

server.addService(RoomRateServiceService, { getRoomTypes })

server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
  server.start();

  console.log('server is running on 0.0.0.0:50051');
});

