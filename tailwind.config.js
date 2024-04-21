/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        interface: {
          DEFAULT: "hsl(var(--interface))",
          foreground: "hsl(var(--interface-foreground))",
          1: "hsl(var(--interface-1))",
          2: "hsl(var(--interface-2))",
          3: "hsl(var(--interface-3))",
        },
        base: {
          DEFAULT: "hsl(var(--base))",
          foreground: "hsl(var(--base-foreground))",
          1: "hsl(var(--base-1))",
          2: "hsl(var(--base-2))",
          3: "hsl(var(--base-3))",
          4: "hsl(var(--base-4))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          1: "hsl(var(--primary-1))",
          2: "hsl(var(--primary-2))",
          3: "hsl(var(--primary-3))",
          4: "hsl(var(--primary-4))",
          5: "hsl(var(--primary-5))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          1: "hsl(var(--secondary-1))",
          2: "hsl(var(--secondary-2))",
          3: "hsl(var(--secondary-3))",
          4: "hsl(var(--secondary-4))",
          5: "hsl(var(--secondary-5))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          1: "hsl(var(--accent-1))",
          2: "hsl(var(--accent-2))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        popover: "hsl(var(--popover))",
        card: "hsl(var(--card))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
