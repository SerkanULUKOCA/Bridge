Bridge.merge(new System.Globalization.CultureInfo("bm", true), {
    englishName: "Bamanankan",
    nativeName: "bamanakan",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "CFA",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["kar","ntɛ","tar","ara","ala","jum","sib"],
        abbreviatedMonthGenitiveNames: ["zan","feb","mar","awi","mɛ","zuw","zul","uti","sɛt","ɔku","now","des",""],
        abbreviatedMonthNames: ["zan","feb","mar","awi","mɛ","zuw","zul","uti","sɛt","ɔku","now","des",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["kari","ntɛnɛ","tarata","araba","alamisa","juma","sibiri"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["zanwuye","feburuye","marisi","awirili","mɛ","zuwɛn","zuluye","uti","sɛtanburu","ɔkutɔburu","nowanburu","desanburu",""],
        monthNames: ["zanwuye","feburuye","marisi","awirili","mɛ","zuwɛn","zuluye","uti","sɛtanburu","ɔkutɔburu","nowanburu","desanburu",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["kar","ntɛ","tar","ara","ala","jum","sib"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "bm-Latn-ML",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});