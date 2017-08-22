Bridge.merge(new System.Globalization.CultureInfo("nso", true), {
    englishName: "Sesotho sa Leboa",
    nativeName: "Sesotho sa Leboa",

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
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "R",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Lam","Mos","Bed","Rar","Ne","Hla","Mok"],
        abbreviatedMonthGenitiveNames: ["Phere","Dibo","Hlak","Mora","Mopi","Phupu","Mose","Phato","Lewe","Dipha","Diba","Manth",""],
        abbreviatedMonthNames: ["Phere","Dibo","Hlak","Mora","Mopi","Phupu","Mose","Phato","Lewe","Dipha","Diba","Manth",""],
        amDesignator: "AM",
        dateSeparator: "-",
        dayNames: ["Lamorena","Musopologo","Labobedi","Laboraro","Labone","Labohlano","Mokibelo"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "yyyy MMMM d, dddd HH:mm:ss",
        longDatePattern: "yyyy MMMM d, dddd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Pherekgong","Dibokwane","Hlakola","Moranang","Mopitlo","Phupu","Mosegemanye","Phato","Lewedi","Diphalane","Dibatsela","Manthole",""],
        monthNames: ["Pherekgong","Dibokwane","Hlakola","Moranang","Mopitlo","Phupu","Mosegemanye","Phato","Lewedi","Diphalane","Dibatsela","Manthole",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["Lam","Mos","Bed","Rar","Ne","Hla","Mok"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1252,
        CultureName: "nso-ZA",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 1132,
        listSeparator: ";",
        MacCodePage: 10000,
        OEMCodePage: 850,
        IsReadOnly: true
    })
});
