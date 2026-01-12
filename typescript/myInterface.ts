interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial:() => string; or
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

const nikhil: Admin = {
  dbId: 22,
  email: "nik@gma",
  userId: 1234,
  githubToken: "github",
  role: "admin",
  startTrial: () => {
    return "Start Trial";
  },
  getCoupon(name: "Nikhil",offer: 10) {
    return 10;
  },
};
//we can reopen a interface in typescript
interface User{
    githubToken: string;
}
interface Admin extends User{
    role: "admin" | "ta" | "learner";
}
