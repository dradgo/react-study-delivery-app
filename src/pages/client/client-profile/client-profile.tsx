import React from "react";
import { useUser } from "../../../context/user-context";
import { Wrapper } from "../../../components/wrapper/wrapper";

// Базовый компонент профиля пользователя
export const ClientProfile: React.FC = () => {
  const client = useUser();

  // Проверяем, загружены ли данные о пользователе
  if (!client) {
    return <div>Загрузка...</div>;
  }

  return (
    <Wrapper>
      <h1>Профиль пользователя</h1>
      <div className="profile-info">
        <p><strong>Тип пользователя:</strong> {client.userType || "Не указан"}</p>
        <p><strong>Имя:</strong> {"Не указано"}</p>
        <p><strong>Email:</strong> {"Не указан"}</p>
        {/* Добавьте другие поля, если они есть в контексте */}
      </div>
    </Wrapper>
  );
};
