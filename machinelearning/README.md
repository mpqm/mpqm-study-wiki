# HMMCANTrafficAnalysis
#### ⚪ About Project
* ##### CAN 네트워크에서 정상과 비정상(공격포함)트래픽을 가지고 데이터 가공후 HMM 알고리즘 적용
* ##### 타임스탬프가 1씩 증가하는 단위시간 동안의 각 Arbid 호출을 엔트로피 시퀀스로 가공 및 HMM 적용
* ##### 해밍 거리로 가공후 ArbId 시퀀스 HMM 적용

- - -

#### ⚪ Running Screen || Video
<p align ="center">
   <img src="https://miro.medium.com/v2/resize:fit:681/1*BGYc0XF3JuykME2sNBtXlg.png"/>
</p>

- - -

#### ⚪ Built with
<p align ="center">
   <img alt="Html" src ="https://img.shields.io/badge/python-3776AB.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
</p>

- - -

#### ⚪ Getting Started
```bash
# prerequisites: python
# execution
git clone https://github.com/MpqM/ML_HMMCANTrafficAnalysis
python hmm_hamming_Arbid.py
python hmm_antropy.py
```

- - -

#### ⚪ Description
* ##### Data Set Sample
![1](https://github.com/MpqM/ML_HMMCANTrafficAnalysis/assets/79093184/15ca70f5-c81b-4a4c-8d77-cd4ea10d0e92)


* ##### Arbid Time Stamp Method
![image](https://github.com/MpqM/ML_HMMCANTrafficAnalysis/assets/79093184/61fad1cd-bea9-4012-9a1a-d0f85d6cc753)

* ##### Arbid Haming Distance Method
![image](https://github.com/MpqM/ML_HMMCANTrafficAnalysis/assets/79093184/982a29bb-94fa-41f6-84a1-564e0e43714d)

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -
# MaliciousCodeAnalysis
#### ⚪ About Project
* ##### N-GRAM 기반 탐지를 이용해 Opcode를 토큰으로하는 Opcode N-Gram을 이용해 머신러닝 기반 악성코드 탐지를 구현
* ##### test(정상, 악성), train(정상, 악성), valid(정상, 악성)로 이루어진 데이터의 OPcode를 추출해 N-Gram으로 가공후 특징정보 추출
* ##### tensorflow를 이용해 모델 학습 수행

- - -

#### ⚪ Running Screen || Video
<p align ="center">
<img src="https://private-user-images.githubusercontent.com/79093184/311500643-5f2324cb-1a8a-49c3-91a7-1577cddeb510.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAwNjU0ODcsIm5iZiI6MTcxMDA2NTE4NywicGF0aCI6Ii83OTA5MzE4NC8zMTE1MDA2NDMtNWYyMzI0Y2ItMWE4YS00OWMzLTkxYTctMTU3N2NkZGViNTEwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzEwVDEwMDYyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFlYmZlN2ZhOTgxZGNkMGY2OGU0YmUwNjc0MTk3MWM4Yjk3OWZhZmVkNzVhYzYzNWNiYWQzZDAxOGQ1MjMxZmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.x5bXy6DxgZ5YWDmQYYNQp8S714LEPzUGHTMK0VUikiU"/>
</p>

- - -

#### ⚪ Built with
<p align ="center">
   <img alt="Html" src ="https://img.shields.io/badge/python-3776AB.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
</p>

- - -

#### ⚪ Getting Started
```bash
# prerequisites: python
# execution
git clone https://github.com/MpqM/ML_MaliciousCodeAnalysis
python ganada-1.py
```

- - -

#### ⚪ Description 
* ##### Data Set Sample
![image](https://github.com/MpqM/ML_MaliciousCodeAnalysis/assets/79093184/7da72f29-77be-4e8d-8d19-eb2e458661f8)
* ##### 6개의 데이터셋들에서 opcodeTrace 추출, target(mal/benign)과 feature(n-gram)데이터 가공
![image](https://github.com/MpqM/ML_MaliciousCodeAnalysis/assets/79093184/0533259f-9573-4e19-893f-2e044356d747)
* ##### 모델 학습
![image](https://github.com/MpqM/ML_MaliciousCodeAnalysis/assets/79093184/24ceac78-4b54-462e-930c-444469685872)

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -

