import { useState } from "react";

const DarkModeToggler = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <label htmlFor="toggle">
        <div className="relative">
          <input
            type="checkbox"
            onClick={() => setIsDark((prev) => !prev)}
            name=""
            id="toggle"
            className="sr-only"
          />
          <div className="h-8 w-14 rounded-full bg-gray-600"></div>
          <div
            className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition ${
              isDark && `translate-x-full`
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggler;
