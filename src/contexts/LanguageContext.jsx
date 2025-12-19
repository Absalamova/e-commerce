import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  uz: {
    // Header
    catalog: "Katalog",
    search: "Mahsulot qidirish...",
    searchPlaceholder: "Mahsulot nomini kiriting...",
    cart: "Savatcha",
    favorites: "Sevimlilar",
    login: "Kirish",
    register: "Ro'yxatdan o'tish",

    // Home
    promotions: "🔥 Aktsiyalar",
    newArrivals: "🆕 Yangiliklar",
    previouslyBought: "🛍️ Avval sotib olingan",
    allProducts: "🛒 Barcha mahsulotlar",

    // Product Card
    addToCart: "Savatchaga qo'shish",
    withCard: "Kartochka bilan",

    // Delivery
    delivery: "Yetkazib berish",
    where: "Qayerdan",
    when: "Qachon",
    aboutYou: "O'zingiz haqingizda",
    district: "Topshiriladigan hudud:",
    selectDistrict: "Hudud tanlang",
    street: "Ko'cha:",
    enterStreet: "Ko'chani kiriting",
    house: "Uy:",
    apartment: "Kvartira:",
    additional: "Qo'shimcha:",
    date: "Sana:",
    selectTime: "Vaqtini tanlang:",
    enterName: "Ismingizni kiriting:",
    enterNamePlaceholder: "Ism kiriting",
    enterPhone: "Raqamingizni kiriting:",
    phonePlaceholder: "901234567",
    discount: "Chegirma",
    products: "ta mahsulot",
    total: "Umumiy Summa",
    payAfterDelivery: "Yetkazib bergandan keyin to'lov",

    // Auth
    welcomeBack: "Xush kelibsiz!",
    welcome: "Xush kelibsiz",
    email: "Email",
    password: "Parol",
    confirmPassword: "Parolni tasdiqlang",
    enterEmail: "Email kiriting",
    enterPassword: "Parol kiriting",
    enterConfirmPassword: "Parolni qayta kiriting",
    signIn: "Kirish",
    signUp: "Ro'yxatdan o'tish",
    noAccount: "Akkauntingiz yo'qmi?",
    haveAccount: "Akkauntingiz bormi?",
    createAccount: "Akkaunt yaratish",
    forgotPassword: "Parolni unutdingizmi?",

    // Common
    loading: "Yuklanmoqda...",
    error: "Xatolik",
    retry: "Qayta urinib ko'ring",
    save: "Saqlash",
    cancel: "Bekor qilish",
    yes: "Ha",
    no: "Yo'q",
    next: "Keyingi",
    back: "Orqaga"
  },
  ru: {
    // Header
    catalog: "Каталог",
    search: "Поиск товаров...",
    searchPlaceholder: "Введите название товара...",
    cart: "Корзина",
    favorites: "Избранное",
    login: "Войти",
    register: "Регистрация",

    // Home
    promotions: "🔥 Акции",
    newArrivals: "🆕 Новинки",
    previouslyBought: "🛍️ Ранее куплено",
    allProducts: "🛒 Все продукты",

    // Product Card
    addToCart: "В корзину",
    withCard: "С картой",

    // Delivery
    delivery: "Доставка",
    where: "Куда",
    when: "Когда",
    aboutYou: "О себе",
    district: "Район доставки:",
    selectDistrict: "Выберите район",
    street: "Улица:",
    enterStreet: "Введите улицу",
    house: "Дом:",
    apartment: "Квартира:",
    additional: "Дополнительно:",
    date: "Дата:",
    selectTime: "Выберите время:",
    enterName: "Введите ваше имя:",
    enterNamePlaceholder: "Имя",
    enterPhone: "Введите ваш телефон:",
    phonePlaceholder: "901234567",
    discount: "Скидка",
    products: "товаров",
    total: "Итого",
    payAfterDelivery: "Оплата при получении",

    // Auth
    welcomeBack: "Добро пожаловать!",
    welcome: "Добро пожаловать",
    email: "Email",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    enterEmail: "Введите email",
    enterPassword: "Введите пароль",
    enterConfirmPassword: "Повторите пароль",
    signIn: "Войти",
    signUp: "Регистрация",
    noAccount: "Нет аккаунта?",
    haveAccount: "Есть аккаунт?",
    createAccount: "Создать аккаунт",
    forgotPassword: "Забыли пароль?",

    // Common
    loading: "Загрузка...",
    error: "Ошибка",
    retry: "Повторить",
    save: "Сохранить",
    cancel: "Отмена",
    yes: "Да",
    no: "Нет",
    next: "Далее",
    back: "Назад"
  },
  en: {
    // Header
    catalog: "Catalog",
    search: "Search products...",
    searchPlaceholder: "Enter product name...",
    cart: "Cart",
    favorites: "Favorites",
    login: "Login",
    register: "Register",

    // Home
    promotions: "🔥 Promotions",
    newArrivals: "🆕 New Arrivals",
    previouslyBought: "🛍️ Previously Bought",
    allProducts: "🛒 All Products",

    // Product Card
    addToCart: "Add to Cart",
    withCard: "With Card",

    // Delivery
    delivery: "Delivery",
    where: "Where",
    when: "When",
    aboutYou: "About You",
    district: "Delivery district:",
    selectDistrict: "Select district",
    street: "Street:",
    enterStreet: "Enter street",
    house: "House:",
    apartment: "Apartment:",
    additional: "Additional:",
    date: "Date:",
    selectTime: "Select time:",
    enterName: "Enter your name:",
    enterNamePlaceholder: "Name",
    enterPhone: "Enter your phone:",
    phonePlaceholder: "901234567",
    discount: "Discount",
    products: "products",
    total: "Total",
    payAfterDelivery: "Pay after delivery",

    // Auth
    welcomeBack: "Welcome back!",
    welcome: "Welcome",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm password",
    enterEmail: "Enter email",
    enterPassword: "Enter password",
    enterConfirmPassword: "Confirm password",
    signIn: "Sign In",
    signUp: "Sign Up",
    noAccount: "Don't have an account?",
    haveAccount: "Have an account?",
    createAccount: "Create account",
    forgotPassword: "Forgot password?",

    // Common
    loading: "Loading...",
    error: "Error",
    retry: "Retry",
    save: "Save",
    cancel: "Cancel",
    yes: "Yes",
    no: "No",
    next: "Next",
    back: "Back"
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('uz');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['uz', 'ru', 'en'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language) => {
    if (['uz', 'ru', 'en'].includes(language)) {
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    translations: translations[currentLanguage]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
