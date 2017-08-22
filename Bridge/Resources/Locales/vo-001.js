Bridge.merge(new System.Globalization.CultureInfo("vo-001", true), {
    englishName: "Volapük (World)",
    nativeName: "Volapük (World)",

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
        currencySymbol: "XDR",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["su.","mu.","tu.","ve.","dö.","fr.","zä."],
        abbreviatedMonthGenitiveNames: ["yan","feb","mäz","prl","may","yun","yul","gst","set","ton","nov","dek",""],
        abbreviatedMonthNames: ["yan","feb","mäz","prl","may","yun","yul","gst","set","tob","nov","dek",""],
        amDesignator: "AM",
        dateSeparator: "-",
        dayNames: ["sudel","mudel","tudel","vedel","dödel","fridel","zädel"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "yyyy MMMM'a' 'd'. d'id' HH:mm:ss",
        longDatePattern: "yyyy MMMM'a' 'd'. d'id'",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["yanul","febul","mäzul","prilul","mayul","yunul","yulul","gustul","setul","tobul","novul","dekul",""],
        monthNames: ["yanul","febul","mäzul","prilul","mayul","yunul","yulul","gustul","setul","tobul","novul","dekul",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["su.","mu.","tu.","ve.","dö.","fr.","zä."],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "vo-001",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});
