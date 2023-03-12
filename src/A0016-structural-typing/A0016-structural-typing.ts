
// Structural typing

type VerifyUserFn = (user: User, sentValues: User) => boolean;

type User = {
  username: string,
  password: string,
};

const verifyUser: VerifyUserFn = (user, sentValues) => (
  user.username === sentValues.username && user.password === sentValues.password
);

const bdUser = {
  username: 'William',
  password: '123123'
};

const sentUser = {
  username: 'William',
  password: '123123'
};

console.log(verifyUser(bdUser, sentUser));
