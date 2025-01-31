interface Window {
  google: {
    translate: {
      TranslateElement: {
        new (options: {
          pageLanguage: string;
          includedLanguages: string;
          layout: any;
          autoDisplay: boolean;
          multilanguagePage?: boolean;
        }, element: string): void;
        InlineLayout: {
          SIMPLE: any;
        };
        getInstance: () => {
          setLanguage: (lang: string) => void;
        };
      };
    };
  };
  googleTranslateElementInit: () => void;
} 