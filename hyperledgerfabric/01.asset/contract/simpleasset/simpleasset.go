package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"strconv"
	"time"

	"github.com/hyperledger/fabric/core/chaincode/shim"
	"github.com/hyperledger/fabric/protos/peer"
)

type SimpleAsset struct {
}

type Asset struct {
	Aid    string `json:"aid"`
	Avalue int    `json:"avalue"`
}

func (t *SimpleAsset) Init(stub shim.ChaincodeStubInterface) peer.Response {
	return shim.Success(nil)
}

func (t *SimpleAsset) Invoke(stub shim.ChaincodeStubInterface) peer.Response {

	fn, args := stub.GetFunctionAndParameters()

	if fn == "set" {
		return t.Set(stub, args)
	} else if fn == "get" {
		return t.Get(stub, args)
	} else if fn == "delete" {
		return t.Delete(stub, args)
	} else if fn == "transfer" {
		return t.Transfer(stub, args)
	} else if fn == "history" {
		return t.Gethistroy(stub, args)
	} else {
		return shim.Error("Not supported function name")
	}
}

func (t *SimpleAsset) Set(stub shim.ChaincodeStubInterface, args []string) peer.Response {

	if len(args) != 2 {
		return shim.Error("set asset need 2 arguments")
	}

	aAsBytes, _ := stub.GetState(args[0])
	
	if aAsBytes != nil {
		return shim.Error("assetid is already exist")
	}

	temp, _ := strconv.Atoi(args[1])
	var asset = Asset{Aid: args[0], Avalue: temp}
	aAsBytes, _ = json.Marshal(asset)
	stub.PutState(args[0], aAsBytes)

	return shim.Success(nil)
}

func (t *SimpleAsset) Get(stub shim.ChaincodeStubInterface, args []string) peer.Response {

	if len(args) != 1 {
		return shim.Error("get asset need 1 arguments")
	}

	aAsBytes, _ := stub.GetState(args[0])

	if aAsBytes == nil {
		return shim.Error("assetid is not exist")
	}

	return shim.Success(aAsBytes)
}

func (t *SimpleAsset) Delete(stub shim.ChaincodeStubInterface, args []string) peer.Response {

	if len(args) != 1 {
		return shim.Error("del asset need 1 arguments")
	}

	stub.DelState(args[0])

	return shim.Success(nil)
}

func (t *SimpleAsset) Transfer(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) != 3 {
		return shim.Error("transfer asset need 2 arguments")
	}

	aAsBytes, _ := stub.GetState(args[0])
	aAsBytes1, _ := stub.GetState(args[1])

	if aAsBytes == nil && aAsBytes1 == nil {
		return shim.Error("assetid is not exist")
	}

	temp, _ := strconv.Atoi(args[2])
	asset := Asset{}
	json.Unmarshal(aAsBytes, &asset)

	asset.Avalue += temp

	aAsBytes, _ = json.Marshal(asset)
	stub.PutState(args[0], aAsBytes)

	temp1, _ := strconv.Atoi(args[2])
	asset1 := Asset{}
	json.Unmarshal(aAsBytes1, &asset1)

	asset1.Avalue -= temp1

	aAsBytes1, _ = json.Marshal(asset1)

	stub.PutState(args[1], aAsBytes1)

	return shim.Success(nil)
}

func (t *SimpleAsset) Gethistroy(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	if len(args) < 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	asset := args[0]

	fmt.Println("readTxHistory:" + asset)

	resultsIterator, err := stub.GetHistoryForKey(asset)
	if err != nil {
		return shim.Error(err.Error())
	}
	defer resultsIterator.Close()

	var buffer bytes.Buffer
	buffer.WriteString("[")

	bArrayMemberAlreadyWritten := false
	for resultsIterator.HasNext() {
		response, err := resultsIterator.Next()
		if err != nil {
			return shim.Error(err.Error())
		}
		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")
		}
		buffer.WriteString("{\"TxId\":")
		buffer.WriteString("\"")
		buffer.WriteString(response.TxId)
		buffer.WriteString("\"")

		buffer.WriteString(", \"Value\":")
		if response.IsDelete {
			buffer.WriteString("null")
		} else {
			buffer.WriteString(string(response.Value))
		}

		buffer.WriteString(", \"Timestamp\":")
		buffer.WriteString("\"")
		buffer.WriteString(time.Unix(response.Timestamp.Seconds, int64(response.Timestamp.Nanos)).String())
		buffer.WriteString("\"")

		buffer.WriteString(", \"IsDelete\":")
		buffer.WriteString("\"")
		buffer.WriteString(strconv.FormatBool(response.IsDelete))
		buffer.WriteString("\"")

		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true
	}
	buffer.WriteString("]")

	fmt.Println("readTxHistory returning:\n" + buffer.String() + "\n")

	return shim.Success(buffer.Bytes())
}

func main() {
	err := shim.Start(new(SimpleAsset))
	
	if err != nil {
		fmt.Printf("Error starting SimpleAsset chaincode: %s", err)
	}
	
}
