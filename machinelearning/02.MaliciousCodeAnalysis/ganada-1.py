import os
import pandas as pd
from sklearn import model_selection, preprocessing
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import confusion_matrix
import tensorflow as tf
# [1] opcode추출
# 1. 모든파일에서 opcode를 추출
# opcode_alist = []
# def data_mining(directory):
#     opcode_listsub = ['rep movsb']
#     for filename in os.listdir(directory):
#         print(filename)
#         with open(os.path.join(directory, filename),"r", errors='ignore') as f:
#             lines = f.readlines()
#             for line in lines:
#                 words = line.split(" ")
#                 opcode_alist.append(words[0].strip())

# data_mining("train__benign")
# data_mining("train__malware")
# data_mining("test_benign")
# data_mining("test_malware")
# data_mining("valid__benign")
# data_mining("valid__malware")
# opcode_listtotal = list(set(opcode_alist))
# print(opcode_listtotal, len(opcode_listtotal))

# 2. 위의 코드에서 6개의 데이터셋들에서 577개의 opcode가 추출되지만 코드수행시간이 오래걸리므로 결과값만 사용, opcode중 x86 instruction문서를 참조해서 164개만 추출해서 사용
opcode = ['fst', 'jnz', 'fldz', 'rep movsd', 'or', 'xor', 'ja', 'sysenter', 'movsb', 'into', 'lss', 'pop', 'sti', 'fmul', 
          'scasw', 'retn', 'setb', 'fsub', 'jecxz', 'daa', 'shr', 'std', 'shl', 'fucom', 'jnp', 'btc', 'stos', 'movzx',
          'enter', 'bts', 'jp', 'lahf', 'rep', 'fdiv', 'jae', 'movsw', 'bound', 'mul', 'fnstcw', 'bsf', 'cbw', 'lea', 'setnbe', 
          'rep movsb', 'je', 'jge', 'jl', 'bsr', 'sahf', 'fild', 'iret', 'cmp', 'fadd', 'xlat', 'loop', 'faddp', 'sar', 'jnb', 
          'shld', 'setbe', 'setl', 'setnb', 'fldcw', 'popa', 'mov', 'idiv', 'ins', 'div', 'fld1', 'outs', 'pusha', 'rol', 'syscall', 
          'push', 'dec', 'sub', 'jle', 'setnz', 'lgs', 'aam', 'les', 'lock', 'loopw', 'out', 'fnstsw', 'fucompp', 'cld', 'fstsw', 'cmpsb', 
          'aad', 'jno', 'setz', 'hlt', 'fninit', 'inc', 'in', 'cmps', 'sbb', 'setp', 'clc', 'lds', 'fistp', 'setnle', 'fxam', 'nop', 'xchg', 
          'repne', 'jnae', 'rcr', 'btr', 'scas', 'fmulp', 'cwde', 'movsx', 'sal', 'jmp', 'add', 'das', 'int', 'ror', 'jb', 'stc', 'fucomp', 
          'call', 'movs', 'jg', 'neg', 'and', 'aas', 'pushf', 'jcxz', 'fld', 'js', 'bt', 'popf', 'cli', 'fstp', 'cmpsw', 'fsubrp', 'leave', 'imul', 'jbe', 
          'scasb', 'cpuid', 'lods', 'test', 'cmpxchg', 'not', 'xadd', 'rcl', 'shrd', 'jz', 'wait', 'cwd', 'adc', 'cdq', 'fsubp', 'cmc', 'aaa', 'setle', 'repe',
          'loope', 'fxch', 'jns']

# 3. 6개의 폴더 파일들에서 명령어trace를 추출해서 opcode_list[]를 반환하는 함수
def data_mining(directory, label):
    print(directory + " opcode 추출")
    i = 1
    opcode_list = []
    for filename in os.listdir(directory):
        print(i)
        opcode_flist = []
        opcode_flist.append(label)
        opcode_flist.append(filename)
        with open(os.path.join(directory, filename),"r", errors='ignore') as f:
            lines = f.readlines()
            for line in lines:
                words = line.split(" ")
                if words[0] in opcode:
                    opcode_flist.append(words[0].strip())
        i += 1
        opcode_fstr = " ".join(map(str, opcode_flist))
        opcode_list.append(opcode_fstr)
    return opcode_list

# 4. 각 데이터 셋별로 얻은 명령어trace(opcode_list[])를 데이터프레임으로 만드는 함수
def mdataframe(opcode_x):
    filename = []
    label = []
    opcode_trace = []
    for i in opcode_x:
        row = i.split(" ")
        label.append(row[0])
        filename.append(row[1])
        opcode_trace.append(" ".join(row[2:]))
    df = pd.DataFrame()
    df["mal/benign"] = label
    df["filename"] = filename
    df["opcodetrace"] = opcode_trace
    print(df)
    return df

# 5. 각 데이터셋의 명령어trace(opcode_list[])를 받아옴
opcode_train__benign = data_mining("train__benign", 0)
opcode_train__malware = data_mining("train__malware", 1)
opcode_valid__benign = data_mining("valid__benign", 0)
opcode_valid__malware = data_mining("valid__malware", 1)
opcode_test_benign = data_mining("test_benign", 0)
opcode_test_malware = data_mining("test_malware", 1)

# 6. 받아온 각 명령어trace를 데이터프레임화
df_trainb = mdataframe(opcode_train__benign)
df_trainm = mdataframe(opcode_train__malware)
df_validb = mdataframe(opcode_valid__benign)
df_validm = mdataframe(opcode_valid__malware)
df_testb = mdataframe(opcode_test_benign)
df_testm = mdataframe(opcode_test_malware)

# 7. 트레이닝셋과 검증셋을 합치고(2400), 테스트셋도 합침(400)
df_train = pd.concat([df_trainb, df_trainm, df_validb, df_validm], ignore_index=True)
df_test = pd.concat([df_testb, df_testm],  ignore_index=True)

# 8. 합쳐진 트레이닝데이터셋(df_train)을 8:2로 트레이닝셋과 검정데이터셋으로 분리
X_train, X_valid, Y_train, Y_valid = model_selection.train_test_split(df_train['opcodetrace'], df_train['mal/benign'], test_size=0.2, random_state=500)

# 9. 8번에서 분리된 데이터셋(트레이닝데이터셋 + 검정데이터셋)의 mal/benign, LableEncoder를 통해 데이터 가공
encoder = preprocessing.LabelEncoder()
Y_train_label = encoder.fit_transform(Y_train)
Y_valid_label = encoder.fit_transform(Y_valid)
Y_test_label = encoder.fit_transform(df_test['mal/benign'])

# 10. 8번에서 분리된 데이터셋(트레이닝데이터셋 + 검정데이터셋)의 opcodetrace를 TfidfVectorizer를 통해 N-GRAM(2.2)으로 데이터 가공후 feature추출
mngram = TfidfVectorizer(ngram_range=(3, 3), max_features=65536)
mngram.fit(df_train['opcodetrace'])
X_train_ngram = mngram.transform(X_train)
X_valid_ngram = mngram.transform(X_valid)
X_test_ngram = mngram.transform(df_test['opcodetrace'])
ngram_feature = mngram.get_feature_names()

# 11. 학습을 위해서 열에는 분리된 데이터셋의 opcodetrace 전처리된값을 행렬변환후 리스트형식으로 넣고, 
#     행에는 분리된 데이터셋의 특징정보([aaa, mov], [mov, eax], [eax, call])를 넣는다
#     데이터프레임 CSV파일로 변경후 출력기능 추가
traindense = X_train_ngram.todense()
traindenselist = traindense.tolist()
df_train_preprocessing = pd.DataFrame(traindenselist, columns = ngram_feature)
df_train_preprocessing.insert(0, column="label", value = Y_train_label)
df_train_preprocessing.to_csv('df_train_for.csv')
validdense = X_valid_ngram.todense()
validdenselist = validdense.tolist()
df_valid_preprocessing = pd.DataFrame(validdenselist, columns = ngram_feature)
df_valid_preprocessing.insert(0, column="label", value = Y_valid_label)
df_valid_preprocessing.to_csv('df_valid_for.csv')
testdense = X_test_ngram.todense()
testdenselist = testdense.tolist()
df_test_preprocessing = pd.DataFrame(testdenselist, columns = ngram_feature)
df_test_preprocessing.insert(0, column="label", value = Y_test_label)
df_test_preprocessing.to_csv('df_test_for.csv')

# 12. 가공된 최종 학습 데이터들 준비
X_train_data = df_train_preprocessing.drop(columns = 'label')
Y_train_data = df_train_preprocessing['label']
X_valid_data = df_valid_preprocessing.drop(columns = 'label')
Y_valid_data = df_valid_preprocessing['label']
X_test_data = df_test_preprocessing.drop(columns = 'label')
Y_test_data = df_test_preprocessing['label']

# 13.학습 모델 설정
# 2-GRAM 학습 시도(109~115참조)
# tvmodel = tf.keras.Sequential([tf.keras.layers.Dense(64, activation='relu'), tf.keras.layers.Dropout(0.1), tf.keras.layers.Dense(1, activation='sigmoid')])
# tvmodel.compile(optimizer='adam', loss=tf.keras.losses.BinaryCrossentropy(from_logits=True), metrics=['accuracy'])
#3-GRAM 설정후 최종 학습(109~115참조)
tvmodel = tf.keras.Sequential([tf.keras.layers.Dense(128, activation='relu'), tf.keras.layers.Dropout(0.1), tf.keras.layers.Dense(1, activation='sigmoid')])
tvmodel.compile(optimizer='adam', loss=tf.keras.losses.BinaryCrossentropy(from_logits=True), metrics=['accuracy'])

# 14. 트레이닝 데이터셋 학습
tvmodel.fit(X_train_data, Y_train_data, epochs=200)

# 15. 검정데이터셋으로 평가
trainvalid_loss, trainvalid_acc = tvmodel.evaluate(X_valid_data, Y_valid_data)

# 16. 테스트데이터셋으로 평가
test_loss, test_acc = tvmodel.evaluate(X_test_data, Y_test_data)

# 17. 최종 모델 결과 출력
print('train + valid learning accuracy:', trainvalid_loss, trainvalid_acc,'Test accuracy:',test_loss, test_acc)

