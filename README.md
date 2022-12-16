# 설정 및 실행 방법
## requirements before run this application
- node.js: latest(stable)
- graphql: latest(stable)
- mongodb atlas: latest
- mongodb node.js driver: v4.12

## 설정 방법
go to directory you want  
run command as follows in terminal  
```
git clone https://github.com/minusmo/buzznbyd-assignment.git
```  
```
npm run install
```

## 실행 방법
run command as follows in terminal  
```
npm run server
```

### 비고
서버는 돌아가는데 요청에 대한 응답은 오지않습니다.  
몽고 DB와 커넥션과 쿼리는 되는데 그 응답을 graphql 미들웨어와 연결하는 작업에 실패했기 때문입니다.

[구현 과제 진행 과정 정리](https://crystal-parade-630.notion.site/5a482bb84a404592ae9e6f39aa89a46c)