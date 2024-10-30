docker exec cli peer chaincode invoke -n simpleasset -C mychannel -c '{"Args":["set","a","10000"]}'
sleep 3
docker exec cli peer chaincode query -n simpleasset -C mychannel -c '{"Args":["get","a"]}'
sleep 3
docker exec cli peer chaincode invoke -n simpleasset -C mychannel -c '{"Args":["set","b","20000"]}'
sleep 3
docker exec cli peer chaincode query -n simpleasset -C mychannel -c '{"Args":["get","b"]}'
sleep 3
docker exec cli peer chaincode invoke -n simpleasset -C mychannel -c '{"Args":["transfer","a","b","5"]}'
sleep 3
docker exec cli peer chaincode query -n simpleasset -C mychannel -c '{"Args":["get","a"]}'
sleep 3
docker exec cli peer chaincode query -n simpleasset -C mychannel -c '{"Args":["get","b"]}'
sleep 3
docker exec cli peer chaincode invoke -n simpleasset -C mychannel -c '{"Args":["delete","a"]}'
sleep 3
docker exec cli peer chaincode query -n simpleasset -C mychannel -c '{"Args":["get","a"]}'
sleep 3
docker exec cli peer chaincode query -n simpleasset -C mychannel -c '{"Args":["history","b"]}'