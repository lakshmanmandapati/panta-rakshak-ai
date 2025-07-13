export const translations = {
  en: {
    title: "Panta Rakshak (పంట రక్షక్)",
    selectLanguage: "Select Language",
    selectCrop: "Select Crop",
    cropOptions: {
      potato: "Potato"
    },
    uploadInstructions: "Upload a clear photo of a single leaf",
    uploadButton: "⬆️ Upload Photo",
    analyzing: "Analyzing...",
    confidence: "Confidence",
    whatToDoNext: "What to Do Next",
    checkAnother: "Check Another",
    disclaimer: "This is an AI suggestion. Always consult a local agricultural expert.",
    diseases: {
      "Healthy": "Healthy",
      "Early Blight": "Early Blight", 
      "Late Blight": "Late Blight"
    },
    advice: {
      "Healthy": [
        "Your crop looks healthy!",
        "Continue regular monitoring",
        "Maintain proper watering and nutrition"
      ],
      "Early Blight": [
        "Remove and destroy infected leaves",
        "Consider applying a recommended fungicide",
        "Ensure good air circulation",
        "Monitor other plants closely"
      ],
      "Late Blight": [
        "This is a serious disease; act fast",
        "Remove and destroy all nearby infected plants",
        "Urgently apply a suitable fungicide",
        "Consult an agricultural expert immediately"
      ]
    }
  },
  te: {
    title: "పంట రక్షక్ (Panta Rakshak)",
    selectLanguage: "భాష ఎంచుకోండి",
    selectCrop: "పంటను ఎంచుకోండి",
    cropOptions: {
      potato: "ఆలుగడ్డ"
    },
    uploadInstructions: "ఒక ఆకు యొక్క స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి",
    uploadButton: "⬆️ ఫోటోను అప్‌లోడ్ చేయండి",
    analyzing: "విశ్లేషిస్తోంది...",
    confidence: "విశ్వాసం",
    whatToDoNext: "తదుపరి ఏమి చేయాలి",
    checkAnother: "మరొకటి తనిఖీ చేయండి",
    disclaimer: "ఇది AI సూచన. ఎల్లప్పుడూ స్థానిక వ్యవసాయ నిపుణుడిని సంప్రదించండి.",
    diseases: {
      "Healthy": "ఆరోగ్యమైనది",
      "Early Blight": "ప్రారంభ ముడత",
      "Late Blight": "ఆలస్య ముడత"
    },
    advice: {
      "Healthy": [
        "మీ పంట ఆరోగ్యంగా ఉంది!",
        "క్రమం తప్పకుండా పర్యవేక్షణ కొనసాగించండి",
        "సరైన నీటిపారుదల మరియు పోషణ కొనసాగించండి"
      ],
      "Early Blight": [
        "వ్యాధిగ్రస్తమైన ఆకులను తొలగించి నాశనం చేయండి",
        "సిఫార్సు చేయబడిన శిలీంద్రనాశకాన్ని వాడండి",
        "మంచి గాలి ప్రసరణ నిర్ధారించండి",
        "ఇతర మొక్కలను దగ్గరగా పర్యవేక్షించండి"
      ],
      "Late Blight": [
        "ఇది తీవ్రమైన వ్యాధి; వేగంగా చర్య తీసుకోండి",
        "అసమీపంలోని వ్యాధిగ్రస్తమైన మొక్కలన్నింటిని తొలగించండి",
        "తక్షణమే తగిన శిలీంద్రనాశకాన్ని వాడండి",
        "వెంటనే వ్యవసాయ నిపుణుడిని సంప్రదించండి"
      ]
    }
  },
  hi: {
    title: "पंत रक्षक (Panta Rakshak)",
    selectLanguage: "भाषा चुनें",
    selectCrop: "फसल चुनें",
    cropOptions: {
      potato: "आलू"
    },
    uploadInstructions: "एक पत्ती की स्पष्ट तस्वीर अपलोड करें",
    uploadButton: "⬆️ फोटो अपलोड करें",
    analyzing: "विश्लेषण कर रहे हैं...",
    confidence: "विश्वास",
    whatToDoNext: "आगे क्या करें",
    checkAnother: "दूसरी जांच करें",
    disclaimer: "यह एक AI सुझाव है। हमेशा स्थानीय कृषि विशेषज्ञ से सलाह लें।",
    diseases: {
      "Healthy": "स्वस्थ",
      "Early Blight": "प्रारंभिक अंगमारी",
      "Late Blight": "देर से अंगमारी"
    },
    advice: {
      "Healthy": [
        "आपकी फसल स्वस्थ दिख रही है!",
        "नियमित निगरानी जारी रखें",
        "उचित पानी और पोषण बनाए रखें"
      ],
      "Early Blight": [
        "संक्रमित पत्तियों को हटाकर नष्ट करें",
        "सुझाई गई फफूंदी नाशक का उपयोग करें",
        "अच्छी हवा का संचार सुनिश्चित करें",
        "अन्य पौधों की बारीकी से निगरानी करें"
      ],
      "Late Blight": [
        "यह एक गंभीर बीमारी है; तुरंत कार्य करें",
        "आसपास के सभी संक्रमित पौधों को हटा दें",
        "तुरंत उपयुक्त फफूंदी नाशक का प्रयोग करें",
        "तुरंत कृषि विशेषज्ञ से सलाह लें"
      ]
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;