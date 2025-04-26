// export const Currencies = [
//     { value: "USD", label: "$ Dollar", locale: "en-US" },
//     { value: "EUR", label: "€ EUR", locale: "de-DE" },
//     { value: "GBP", label: "£ Pound", locale: "en-GB" },
//     { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
// ];

// export type Currency = (typeof Currencies[0]);

export type Currency = {
    value: string;
    label: string;
  };
  
  export const Currencies: Currency[] = [
    { value: "USD", label: "🇺🇸 USD - US Dollar" },
    { value: "EUR", label: "🇪🇺 EUR - Euro" },
    { value: "GBP", label: "🇬🇧 GBP - British Pound" },
    { value: "JPY", label: "🇯🇵 JPY - Japanese Yen" },
    { value: "AUD", label: "🇦🇺 AUD - Australian Dollar" },
    { value: "CAD", label: "🇨🇦 CAD - Canadian Dollar" },
    { value: "CHF", label: "🇨🇭 CHF - Swiss Franc" },
    { value: "CNY", label: "🇨🇳 CNY - Chinese Yuan" },
    { value: "IDR", label: "🇮🇩 IDR - Indonesian Rupiah" },
    { value: "SGD", label: "🇸🇬 SGD - Singapore Dollar" },
    { value: "INR", label: "🇮🇳 INR - Indian Rupee" },
    { value: "KRW", label: "🇰🇷 KRW - South Korean Won" },
    { value: "NZD", label: "🇳🇿 NZD - New Zealand Dollar" },
    { value: "THB", label: "🇹🇭 THB - Thai Baht" },
    { value: "PHP", label: "🇵🇭 PHP - Philippine Peso" },
  ]
  