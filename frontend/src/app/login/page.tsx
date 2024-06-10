import { Button, Link } from "@nextui-org/react";

const LoginAuth = () => {
  return (
    <div className="border rounded-lg flex flex-col gap-y-2 p-4">
      <h2 className="text-center text-lg">Как хотите зарегистрироваться?</h2>
      <Button as={Link} href="/signin/student" color="primary">
        Регистрация как студент
      </Button>
      <Button as={Link} href="/signin/teacher" color="secondary">
        Регистрация как преподаватель
      </Button>
      <h3 className="text-center text-lg">Уже есть аккаунт?</h3>
      <Button as={Link} href="/login/student" color="primary">
        Войти как студент
      </Button>
      <Button as={Link} href="/login/teacher" color="secondary">
        Войти как преподаватель
      </Button>
    </div>
  );
};

export default LoginAuth;
