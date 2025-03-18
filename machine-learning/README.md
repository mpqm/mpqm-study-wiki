# 01. HMMCANTrafficAnalysis
<div align="center">
    <img  style="width: 50%" src="https://miro.medium.com/v2/resize:fit:681/1*BGYc0XF3JuykME2sNBtXlg.png">
</div>

<br>

## 👨🏻‍🏫 프로젝트 소개
<details>
<summary><b> 📌 프로젝트 개요</b></summary>
<br>

- CAN 네트워크에서 정상과 비정상(공격포함)트래픽을 가지고 데이터 가공후 HMM 알고리즘 적용
- 타임스탬프가 1씩 증가하는 단위시간 동안의 각 Arbid 호출을 엔트로피 시퀀스로 가공 및 HMM 적용
- 해밍 거리로 가공후 ArbId 시퀀스 HMM 적용

</details>

<br>

<details>
<summary><b> 🏃 프로젝트 실행</b></summary>
<br>

```bash
# prerequisites: python
# execution
git clone https://github.com/MpqM/ML_HMMCANTrafficAnalysis
python hmm_hamming_Arbid.py
python hmm_antropy.py
```

</details>

<br>

<details>
<summary><b> 🚀 프로젝트 설명</b></summary>
<br>

- Data Set Sample
<p align ="center">
    <img src="../wiki-images/machine-learning/ml-cantraffic-1.png"/>
</p>

- Arbid Time Stamp Method
<p align ="center">
    <img src="../wiki-images/machine-learning/ml-cantraffic-2.png"/>
</p>

- Arbid Haming Distance Method
<p align ="center">
    <img src="../wiki-images/machine-learning/ml-cantraffic-3.png"/>
</p>

</details>

<br>

<details>
<summary><b> 🎮 기술 스택</b></summary>
<br>

| **CATEGORY** | **SKILLS**                                                                                            | 
|--------------|-------------------------------------------------------------------------------------------------------|
| **LANGUAGE** | ![Python](https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white) |

</details>

<br>

- - -

# 02. MaliciousCodeAnalysis

<div align="center">
    <img  style="width: 50%" src="../wiki-images/machine-learning/ml-maliciouscode-1.png">
</div>

<br>

## 👨🏻‍🏫 프로젝트 소개
<details>
<summary><b> 📌 프로젝트 개요</b></summary>
<br>

- N-GRAM 기반 탐지를 이용해 Opcode를 토큰으로하는 Opcode N-Gram을 이용해 머신러닝 기반 악성코드 탐지를 구현
- test(정상, 악성), train(정상, 악성), valid(정상, 악성)로 이루어진 데이터의 OPcode를 추출해 N-Gram으로 가공후 특징정보 추출
- tensorflow를 이용해 모델 학습 수행

</details>

<br>

<details>
<summary><b> 🏃 프로젝트 실행</b></summary>
<br>

```bash
# prerequisites: python
# execution
git clone https://github.com/MpqM/ML_MaliciousCodeAnalysis
python ganada-1.py
```

</details>

<br>

<details>
<summary><b> 🚀 프로젝트 설명</b></summary>
<br>

- Data Set Sample
<p align ="center">
    <img src="../wiki-images/machine-learning/ml-maliciouscode-2.png"/>
</p>

- 6개의 데이터셋들에서 opcodeTrace 추출, target(mal/benign)과 feature(n-gram)데이터 가공</b>
<p align ="center">
    <img src="../wiki-images/machine-learning/ml-maliciouscode-3.png"/>
</p>

- 모델 학습
<p align ="center">
    <img src="../wiki-images/machine-learning/ml-maliciouscode-4.png"/>
</p>

</details>

<br>

<details>
<summary><b> 🎮 기술 스택</b></summary>
<br>

| **CATEGORY** | **SKILLS**                                                                                            | 
|--------------|-------------------------------------------------------------------------------------------------------|
| **LANGUAGE** | ![Python](https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white) |

</details>

<br>
