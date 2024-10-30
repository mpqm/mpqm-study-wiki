import hmmlearn.hmm as hmm
import numpy as np
np.set_printoptions(threshold=np.inf, linewidth=np.inf)

# 0. 해밍거리 게산함수
def Hamming_Distance(arbid_s1,arbid_s2):
  distance = 0
  x = int(arbid_s1,16)
  y = int(arbid_s2,16)
  distance = bin(x^y).count('1')
#   print(bin(x),bin(y),distance)
  return distance

# 1. ArbID 시퀀스 추출
def Get_Arbid_Sequance(filepath):
    Arbid_Seq = list()
    with open(filepath, 'r') as f:
        lines = f.readlines()
        for line in lines:
            Arbid_Seq.append(line.split('\t')[1])
    # print(Arbid_Seq)
    return Arbid_Seq

# 2. 해밍거리로 ArbID 시퀀스 가공
def Get_Haming_Distance_Data_Sequance(arbid_seq):
    HD_Seq = list()
    stop=0
    for stop in range(len(arbid_seq)+1):
        arbid_seq_1 = arbid_seq[stop]
        stop += 1
        if stop == len(arbid_seq):
            break
        else:
            arbid_seq_2 = arbid_seq[stop]
        k = Hamming_Distance(arbid_seq_1, arbid_seq_2)
        HD_Seq.append(k)
    HD_Seq_int = np.fromiter((int(x) for x in HD_Seq), dtype=np.uint16)
    # print(HD_Seq_int)
    return HD_Seq_int
    
# 3. 해밍거리 시퀀스로 슬라이딩윈도우 사이즈를 정해서 데이터셋 생성
def Create_Dataset_With_Split_HDSequance_By_Window(hd_seq_int,wndsize):
    splited = np.array([])
    cnt = 0
    for i in range(np.size(hd_seq_int)-wndsize+1):
        splited = np.append(splited, hd_seq_int[i:i+wndsize])
        cnt+=1
        print(cnt)
    splited = np.reshape(splited, (cnt,wndsize))
    return splited

# 4. 1~3과정후 트레이닝 셋 생성
arbid_seq = Get_Arbid_Sequance('CAN traffic (normal only).txt')
hd_seq = Get_Haming_Distance_Data_Sequance(arbid_seq)
train_set = Create_Dataset_With_Split_HDSequance_By_Window(hd_seq,4)

# 5. 1~3 과정후 테스트 셋 생성
arbid_seq = Get_Arbid_Sequance('CAN traffic (attack included).txt')
hd_seq = Get_Haming_Distance_Data_Sequance(arbid_seq)
test_set = Create_Dataset_With_Split_HDSequance_By_Window(hd_seq,4)

print(len(train_set), len(test_set))
# 6. 모델 설정
model = hmm.GaussianHMM(4)
model.fit(train_set) # 학습
print(model.score(train_set)) # 트레이닝셋 평가, sum of log probability
print(model.score(test_set)) # 테스트셋 평가, sum of log probability
print(model.startprob_) # 초기상태확률
print(model.transmat_) # 상태천이확률출력