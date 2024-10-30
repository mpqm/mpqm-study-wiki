docker exec cli peer chaincode install -n simpleasset -v 1.0 -p github.com/simpleasset
docker exec cli peer chaincode instantiate -n simpleasset -v 1.0 -C mychannel -c '{"Args":[]}' -P 'OR ("Org1MSP.member","Org2MSP.member","Org3MSP.member")'
sleep 3
docker exec cli peer chaincode invoke -n simpleasset -C mychannel -c '{"Args":["set","test1","10000"]}'
sleep 3
docker exec cli peer chaincode query -n simpleasset -C mychannel -c '{"Args":["get","test1"]}'