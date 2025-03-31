import pymysql
from faker import Faker
from datetime import datetime, timedelta
import random

# MariaDB 연결 정보 설정
db_config = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "qwer1234",
    "database": "auto",
}

# Faker 초기화
faker = Faker('ko_KR')

# MariaDB 연결
connection = pymysql.connect(**db_config)
cursor = connection.cursor()

# 테이블 이름 설정
post_table_name = "tb_post"
post_image_table_name = "tb_post_image"
comment_table_name = "tb_comment"

# 배치 사이즈 설정
batch_size = 100

# 게시물 데이터 생성 및 삽입 함수
def post_data(num_rows):
    # 외래 키 검사를 비활성화
    cursor.execute("SET FOREIGN_KEY_CHECKS = 0;")

    # 인덱스 비활성화
    cursor.execute(f"ALTER TABLE {post_table_name} DISABLE KEYS;")

    try:
        # 가능한 카테고리 목록 조회
        cursor.execute("SELECT code_name FROM tb_code WHERE group_name = 'POST_CATEGORY'")
        categories = [row[0] for row in cursor.fetchall()]
        
        if not categories:
            categories = ['공지사항', '질문과 답변', '자유게시판', '갤러리']
        
        insert_values = []

        for i in range(1, num_rows + 1):
            created_at = faker.date_time_this_year()
            updated_at = created_at + timedelta(days=random.randint(0, 10))
            code_name = random.choice(categories)
            author = faker.name()
            password = "A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ="  # 1234
            title = faker.sentence(nb_words=6)
            content = faker.text(max_nb_chars=500)
            view_count = random.randint(0, 1000)
            like_count = random.randint(0, 100)
            unlike_count = random.randint(0, 100)

            insert_values.append((
                code_name,
                author,
                password,
                title,
                content,
                view_count,
                like_count, 
                unlike_count,
                created_at.strftime('%Y-%m-%d %H:%M:%S'),
                updated_at.strftime('%Y-%m-%d %H:%M:%S')
            ))

            # 배치 사이즈에 도달하면 삽입
            if len(insert_values) >= batch_size:
                cursor.executemany(f"""
                    INSERT INTO {post_table_name} (
                        code_name, author, password, title, content, 
                        view_count, like_count, unlike_count, created_at, updated_at
                    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
                """, insert_values)
                insert_values = []
                print(f"------------------------- post_data {batch_size} inserted successfully.")

        # 남은 데이터 삽입
        if insert_values:
            cursor.executemany(f"""
                INSERT INTO {post_table_name} (
                    code_name, author, password, title, content, 
                    view_count, like_count, unlike_count, created_at, updated_at
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
            """, insert_values)

        # 커밋
        connection.commit()
        print(f"------------------------- post_data total inserted successfully.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        connection.rollback()

    finally:
        # 인덱스 다시 활성화
        cursor.execute(f"ALTER TABLE {post_table_name} ENABLE KEYS;")
        cursor.execute("SET FOREIGN_KEY_CHECKS = 1;")

# 게시물 이미지 데이터 생성 및 삽입 함수
def post_image_data(num_rows):
    # 외래 키 검사를 비활성화
    cursor.execute("SET FOREIGN_KEY_CHECKS = 0;")

    # 인덱스 비활성화
    cursor.execute(f"ALTER TABLE {post_image_table_name} DISABLE KEYS;")

    try:
        insert_values = []

        # 게시물 ID 조회
        cursor.execute(f"SELECT idx FROM {post_table_name}")
        post_ids = [row[0] for row in cursor.fetchall()]
        
        if not post_ids:
            print("게시물이 없습니다. 먼저 게시물 데이터를 생성해주세요.")
            return
        
        for i in range(1, num_rows + 1):
            post_idx = random.choice(post_ids)
            file_path = f"https://picsum.photos/id/{random.randint(1, 300)}/{random.randint(1, 300)}/{random.randint(1, 300)}"
            created_at = faker.date_time_this_year()

            insert_values.append((
                post_idx,
                file_path,
                created_at.strftime('%Y-%m-%d %H:%M:%S')
            ))

            # 배치 사이즈에 도달하면 삽입
            if len(insert_values) >= batch_size:
                cursor.executemany(f"""
                    INSERT INTO {post_image_table_name} (
                        post_idx, file_path, created_at
                    ) VALUES (%s, %s, %s);
                """, insert_values)
                insert_values = []
                print(f"------------------------- post_image_data {batch_size} inserted successfully.")

        # 남은 데이터 삽입
        if insert_values:
            cursor.executemany(f"""
                INSERT INTO {post_image_table_name} (
                    post_idx, file_path, created_at
                ) VALUES (%s, %s, %s);
            """, insert_values)

        # 커밋
        connection.commit()
        print(f"------------------------- post_image_data total inserted successfully.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        connection.rollback()

    finally:
        # 인덱스 다시 활성화
        cursor.execute(f"ALTER TABLE {post_image_table_name} ENABLE KEYS;")
        cursor.execute("SET FOREIGN_KEY_CHECKS = 1;")

# 댓글 데이터 생성 및 삽입 함수
def comment_data(num_rows):
    # 외래 키 검사를 비활성화
    cursor.execute("SET FOREIGN_KEY_CHECKS = 0;")

    # 인덱스 비활성화
    cursor.execute(f"ALTER TABLE {comment_table_name} DISABLE KEYS;")

    try:
        insert_values = []

        # 게시물 ID 조회
        cursor.execute(f"SELECT idx FROM {post_table_name}")
        post_ids = [row[0] for row in cursor.fetchall()]
        
        if not post_ids:
            print("게시물이 없습니다. 먼저 게시물 데이터를 생성해주세요.")
            return
        
        for i in range(1, num_rows + 1):
            post_idx = random.choice(post_ids)
            author = faker.name()
            password = "A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ="  # 암호화된 비밀번호
            content = faker.text(max_nb_chars=200)
            created_at = faker.date_time_this_year()
            updated_at = created_at + timedelta(days=random.randint(0, 10))

            insert_values.append((
                post_idx,
                author,
                password,
                content,
                created_at.strftime('%Y-%m-%d %H:%M:%S'),
                updated_at.strftime('%Y-%m-%d %H:%M:%S')
            ))

            # 배치 사이즈에 도달하면 삽입
            if len(insert_values) >= batch_size:
                cursor.executemany(f"""
                    INSERT INTO {comment_table_name} (
                        post_idx, author, password, content, created_at, updated_at
                    ) VALUES (%s, %s, %s, %s, %s, %s);
                """, insert_values)
                insert_values = []
                print(f"------------------------- comment_data {batch_size} inserted successfully.")

        # 남은 데이터 삽입
        if insert_values:
            cursor.executemany(f"""
                INSERT INTO {comment_table_name} (
                    post_idx, author, password, content, created_at, updated_at
                ) VALUES (%s, %s, %s, %s, %s, %s);
            """, insert_values)

        # 커밋
        connection.commit()
        print(f"------------------------- comment_data total inserted successfully.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        connection.rollback()

    finally:
        # 인덱스 다시 활성화
        cursor.execute(f"ALTER TABLE {comment_table_name} ENABLE KEYS;")
        cursor.execute("SET FOREIGN_KEY_CHECKS = 1;")

try:
    # 데이터 생성 실행
    post_data(100000)        # 100000개의 게시물 생성
    post_image_data(200000)  # 200000개의 게시물 이미지 생성 (게시물당 평균 2개)
    comment_data(500000)     # 500000개의 댓글 생성 (게시물당 평균 5개)


except pymysql.MySQLError as e:
    print(f"MySQL Error: {e}")
except Exception as e:
    print(f"Error: {e}")
finally:
    cursor.close()
    connection.close()
    print("데이터베이스 연결이 닫혔습니다.")
