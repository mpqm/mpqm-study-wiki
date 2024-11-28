import hmmlearn.hmm as hmm
import numpy as np
np.set_printoptions(threshold=np.inf, linewidth=np.inf)

# 1. CAN 트래픽에 포함된 각 ArbID 목록 추출 
def Get_Arbid_List(filepath):
    arb_set = list()
    arb_li = list()
    with open(filepath,'r') as f:
        lines = f.readlines()
        for line in lines:
            arb_li.append(line.split('\t')[1])
        arb_set = list(set(arb_li))
    return arb_set
arb_set_normal = Get_Arbid_List('CAN traffic (attack included).txt')
arb_Set_abnormal = Get_Arbid_List('CAN traffic (attack included).txt')
print(arb_set_normal)
print(arb_Set_abnormal)

# CAN 트래픽에서 호출되는 ArbID 목록
# arbid_dt = {'49F':0, '4C9':0, '394':0, '563':0, '470':0, '2B0':0, '57F':0, '07F':0, '5CD':0, '130':0, '520':0, '553':0, '153':0, '53B':0, '4F1':0, '368':0, '7D0':0,
#  '53E':0, '389':0, '50C':0, '356':0, '366':0, '479':0, '48A':0, '391':0, '541':0, '164':0, '7D4':0, '4A7':0, '43':0, '5BE':0, '52A':0, '140':0, '436':0, '544':0, '453':0,
#  '7D8':0, '0':0, '412':0, '381':0, '340':0, '386':0, '4CB':0, '4A9':0, '50A':0, '44E':0, '367':0, '568':0, '485':0, '329':0, '483':0, '410':0, '495':0, '507':0, '50E':0, 
#  '47F':0, '572':0, '220':0, '42D':0, '559':0, '7CC':0, '38D':0, '421':0, '7DC':0, '5B0':0, '58B':0, '251':0, '490':0, '484':0, '593':0, '53F':0, '500':0, '420':0, '260':0, 
#  '4A4':0, '4A2':0, '387':0, '48C':0, '7C4':0, '5A6':0, '492':0}

# *. 엔트로피 계산 함수
def H(p):
    p_n = np.where(p != 0)
    return -np.sum(p[p_n]*np.log(p[p_n]))

# 2-1. 타임스탬프가 1씩 증가하는 단위 시간동안의 각 ArbID가 호출되는 확률로 구해서 단위시간동안의 ArbID에 대한 엔트로피계산
def Get_Entropy(arbid_dt_1):
    total = sum(arbid_dt_1.values())
    for i in arbid_dt_1:
        arbid_dt_1[i] /= total
    # print(arbid_dt_1)
    arbid_dt_probability_li = arbid_dt_1
    each_probablity_li = np.fromiter(arbid_dt_probability_li.values(), dtype=float)
    Entropy= H(each_probablity_li)
    # print(Entropy)
    return Entropy

# 2. 타임스탬프가 1씩 증가하는 단위 시간동안의 각 ArbID에 대한 호출횟수를 계산        
def Get_Arbid_Count_In_Onetimestamp(filepath):
    Entropy_seq = list()
    with open(filepath,'r') as f:
        timestamp_1 = int(f.readline().split('\t')[0])
        lines = f.readlines()
        arbid_dt_1timestamp = arbid_dt
        for line in lines:
            timestamp_2 = int(line.split('\t')[0])
            arbid = str(line.split('\t')[1])
            if timestamp_1 != timestamp_2:
                # print(timestamp_1, arbid_dt_1timestamp)
                Entropy_seq.append(Get_Entropy(arbid_dt_1timestamp))
                arbid_dt_1timestamp.update({}.fromkeys(arbid_dt_1timestamp, 0))
                timestamp_1 = timestamp_2
            elif arbid in arbid_dt:
                arbid_dt_1timestamp[arbid] += 1
    #print(Entropy_seq)
    return Entropy_seq

# 3. 타임스탬프가 1증가하는 단위시간동안의 엔트로피 시퀀스를 윈도우 사이즈로 데이터 셋 생성
def Create_Dataset_With_Split_EntopySequance_By_Window(entropy_seq,wndsize):
    splited = np.array([])
    cnt = 0
    for i in range(np.size(entropy_seq)-wndsize+1):
        splited = np.append(splited, entropy_seq[i:i+wndsize]); cnt+=1
    splited = np.reshape(splited, (cnt,wndsize))
    # print(splited)
    return splited

entropy_seq = Get_Arbid_Count_In_Onetimestamp('CAN traffic (normal only).txt')
train_set = Create_Dataset_With_Split_EntopySequance_By_Window(entropy_seq, 10)

entropy_seq = Get_Arbid_Count_In_Onetimestamp('CAN traffic (attack included).txt')
test_set = Create_Dataset_With_Split_EntopySequance_By_Window(entropy_seq, 10)
print(len(train_set), len(test_set))

# 6. 모델 설정
model = hmm.GaussianHMM(3)
model.fit(train_set) # 학습
print(model.score(train_set)) # 트레이닝셋 평가, sum of log probability
print(model.score(test_set)) # 테스트셋 평가, sum of log probability
print(model.startprob_) # 초기상태확률
print(model.transmat_) # 상태천이확률출력