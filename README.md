# welcome

MegaAI Welcome Project

## 깃허브 저장소 운영 규칙

### 1. 저장소 제목

- 제목 명명 규칙
  저장소의 제목은 snake_case 또는 kebab-case형식을 따른다.

예: **`my_new_project`**, **`data_processing_module`, `data-processing-module`**

### 2. 커밋 규칙

- 커밋 메시지의 구조

```
<타입>(<범위>): <제목>

<내용>

<이슈 종결 키워드>
```

- **타입(Type)**은 다음 중 하나를 선택:

  - **feat**: 새로운 기능 추가
  - **fix**: 버그 수정
  - **style**: 코드 스타일(들여쓰기, 세미콜론 누락 등) 변경
  - **refactor**: 코드 리팩토링
  - **test**: 테스트 코드 추가, 수정
  - **chore**: 기타 사항 수정

- **범위(Scope)**은 변경되는 부분을 명시한다.
- **제목(Subject)**은 변경 내용의 간단한 요약으로, 50자 이내로 작성한다.
- 가능한 한 커밋은 작은 기능 단위나 버그 수정 단위로 한정한다.
- 이슈를 종결하는 커밋의 경우 자동으로 이슈를 닫을 수 있는 키워드를 사용하여 종결한다
- 이슈를 메시지 커밋 번호를 명시해야된다.

```javascript
feat(user-auth): implement login with OAuth #101

Added an OAuth-based login system to improve security and UX. The new system will allow users to sign in using their Google or Facebook accounts.

Resolves #101, #102
```

### 3. 브랜치 전략

- main 또는 master 브랜치는 Dev, Staging용으로 운영한다.
- **feature** 브랜치를 생성하여 개별 기능 개발을 진행한다.
  - 예: **`feature/add_login_button`**
- **hotfix** 브랜치를 생성하여 긴급 버그 수정을 진행한다.
  - 예: **`hotfix/fix_login_error`**
- 기능 개발이나 버그 수정이 완료된 후에는 해당 브랜치를 main 또는 master 브랜치로 병합(merge)한다.

### 4. 문서화

- 코드 개발이 완료 된 후 GPT, Codeplot을 활용하여 모든 함수, 클래스, 모듈에는 적절한 주석을 포함한다.
- 프로젝트의 주요 변경 사항, 설치 및 실행 방법 등은 **`README.md`**에 기록한다.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
