Bridge.merge(new System.Globalization.CultureInfo("ti-ET", true), {
    englishName: "Tigrinya (Ethiopia)",
    nativeName: "ትግርኛ (ኢትዮጵያ)",

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
        currencySymbol: "Br",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
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
        abbreviatedDayNames: ["ሰን","ሰኑ","ሰሉ","ረቡ","ሓሙ","ዓር","ቀዳ"],
        abbreviatedMonthGenitiveNames: ["ጥሪ","ለካ","መጋ","ሚያ","ግን","ሰነ","ሓም","ነሓ","መስ","ጥቅ","ሕዳ","ታሕ",""],
        abbreviatedMonthNames: ["ጥሪ","ለካ","መጋ","ሚያ","ግን","ሰነ","ሓም","ነሓ","መስ","ጥቅ","ሕዳ","ታሕ",""],
        amDesignator: "ንጉሆ ሰዓተ",
        dateSeparator: "/",
        dayNames: ["ሰንበት","ሰኑይ","ሠሉስ","ረቡዕ","ኃሙስ","ዓርቢ","ቀዳም"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd፣ dd MMMM መዓልቲ yyyy gg h:mm:ss tt",
        longDatePattern: "dddd፣ dd MMMM መዓልቲ yyyy gg",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
        monthNames: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
        pmDesignator: "ድሕር ሰዓት",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ሰን","ሰኑ","ሰሉ","ረቡ","ሓሙ","ዓር","ቀዳ"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "ti-ET",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 1139,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});
