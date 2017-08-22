Bridge.merge(new System.Globalization.CultureInfo("zh-Hans-MO", true), {
    englishName: "Chinese (Simplified Han, Macao SAR)",
    nativeName: "中文 (澳门特别行政区)",

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
        currencySymbol: "MOP$",
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
        abbreviatedDayNames: ["周日","周一","周二","周三","周四","周五","周六"],
        abbreviatedMonthGenitiveNames: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
        abbreviatedMonthNames: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
        amDesignator: "上午",
        dateSeparator: "/",
        dayNames: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "yyyy年M月d日dddd tth:mm:ss",
        longDatePattern: "yyyy年M月d日dddd",
        longTimePattern: "tth:mm:ss",
        monthDayPattern: "M月d日",
        monthGenitiveNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
        monthNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
        pmDesignator: "下午",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["周日","周一","周二","周三","周四","周五","周六"],
        shortTimePattern: "tth:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy年M月",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 936,
        CultureName: "zh-Hans-MO",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 10008,
        OEMCodePage: 936,
        IsReadOnly: true
    })
});
