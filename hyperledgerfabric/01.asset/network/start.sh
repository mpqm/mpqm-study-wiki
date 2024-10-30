set -ev
export MSYS_NO_PATHCONV=1
export CA_ORG1_KEY=$(cd crypto-config/peerOrganizations/org1.example.com/ca && ls *_sk)
docker-compose -f docker-compose.yml down
docker-compose -f docker-compose.yml up -d ca.org1.example.com orderer.example.com peer0.org1.example.com peer0.org2.example.com peer0.org3.example.com couchdb1 couchdb2 couchdb3 cli
docker ps -a
export FABRIC_START_TIMEOUT=10
sleep ${FABRIC_START_TIMEOUT}
docker exec cli peer channel create -o orderer.example.com:7050 -c mychannel -f /etc/hyperledger/configtx/channel.tx
docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp" peer0.org1.example.com peer channel join -b /etc/hyperledger/configtx/mychannel.block
sleep 3
docker exec -e "CORE_PEER_LOCALMSPID=Org2MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org2.example.com/msp" peer0.org2.example.com peer channel join -b /etc/hyperledger/configtx/mychannel.block
sleep 3
docker exec -e "CORE_PEER_LOCALMSPID=Org3MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org3.example.com/msp" peer0.org3.example.com peer channel join -b /etc/hyperledger/configtx/mychannel.block
sleep 3
