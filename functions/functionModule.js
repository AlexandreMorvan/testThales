const functionModule = {

    arrayAvg: (data, metric) => {

        const newArray = data.map(function (el) {
            return el[metric];
        })

        var i = 0, summ = 0, ArrayLen = newArray.length;
        while (i < ArrayLen) {
            summ = summ + newArray[i++];
        }
        return summ / ArrayLen;
    },

    arrayMin: (data, metric) => {
        
        const newArray = data.filter(function (el) {
            return el[metric] === Math.min.apply(Math, data.map(function (o) {
                return o[metric];
            }))
        }
        );

        return newArray
    },

    arrayMax: (data, metric) => {

        const newArray = data.filter(function (el) {
            return el[metric] === Math.max.apply(Math, data.map(function (o) {
                return o[metric];
            }))
        }
        );

        return newArray
    },

    dataBetweenTwoDates: (data, date1, date2) => {

        let targetData = data.filter(function (el) {

            if (el.time >= date1 && el.time <= date2) {
                return el.time
            } else {
                return false
            }
        })

        return targetData
    },

    metricValueBetweenTwoDates: (data, metric, date1, date2) => {

        let targetData = data.filter(function (el) {

            if (el.time >= date1 && el.time <= date2) {
                return el.time
            } else {
                return false
            }
        })

        const targetValue = targetData.map(element => {
            return element[metric]
        })

        return targetValue
    },
}

module.exports = functionModule;