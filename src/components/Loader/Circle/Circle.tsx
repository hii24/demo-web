import { useEffect, useState } from "react";

const CircleDotsGradientAnimation = () => {
  const [gradientColors, setGradientColors] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Додаємо індекс для кругового доступу до кольорів
  const circleRadius = 14;
  const dotsNum = 16;
  const centerX = 25;
  const centerY = 25;
  const animationSpeed = 50;

  useEffect(() => {
    const colors: string[] = [];
    for (let i = 0; i < dotsNum; i++) {
      const opacity = 1 - i / dotsNum;
      colors.push(`rgba(249, 238, 204, ${opacity})`);
    }
    setGradientColors(colors);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dotsNum); // Оновлюємо індекс для кругового перегляду
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [dotsNum]); // Залежність від dotsNum забезпечує перерахунок при зміні кількості точок

  return (
    <svg height="50" width="50">
      {Array.from({ length: dotsNum }).map((_, i) => {
        // Обрахунок кута з урахуванням currentIndex
        const angle = (i * 2 * Math.PI) / dotsNum;
        const x = centerX + circleRadius * Math.cos(angle);
        const y = centerY + circleRadius * Math.sin(angle);
        // Визначення кольору з кругового масиву
        const color = gradientColors[(currentIndex + i) % dotsNum];
        return <circle key={i} cx={x} cy={y} r="2" fill={color} />;
      })}
    </svg>
  );
};

export default CircleDotsGradientAnimation;
