// Error message: value is not a number (NaN).
function nanError(value) {
    return 'Expect value to be a number';
}

//Error message: value is less than 0.
function lessThanZeroError(value) {
    return 'Expect value to be >= 0';
}

// Error message: value is greater than top value in the list.
function greaterThanError(value) {
    return 'Expect value to be <= top value in the list';
}

// List of value validation
function validateInputValue(values, list, fn) {
    console
    // top number in the list
    top = (fn) ? fn(list[list.length - 1]) : (list[list.length - 1]);

    return values.reduce(function (errors, value) {
        if (isNaN(Number(value))) {
            errors.push(nanError(value));
        } else if (value < 0) {
            errors.push(lessThanZeroError(value));
        } else if (value > top) {
            errors.push(greaterThanError(value));
        }
        return errors;
    }, []);
}

// caculate Percentile Rank from an array.
function getPercentileRank(val, list, fn) {
    if (fn) {
        if (val === 0) return 0;
        return Math.ceil((val / fn(list[list.length - 1])) * 100);

    } else {

        if (val === 0) return 0;
        return Math.ceil((val / (list[list.length - 1])) * 100);
    }
}

// calculate Percentile Rank for given array of values.
function percentileRank(values, list, fn) {
    var values = Array.isArray(values) ? values : [values];
    if(!Array.isArray(list)){
        throw new Error('Expect value to be an Array');
    }

    list = list.slice().sort(function (a, b) {
        if (fn) {
            a = fn(a);
            b = fn(b);
        }

        a = Number.isNaN(a) ? Number.NEGATIVE_INFINITY : a;
        b = Number.isNaN(b) ? Number.NEGATIVE_INFINITY : b;

        if (a > b) return 1;
        if (a < b) return -1;

        return 0;
    });

    var validationErrors = validateInputValue(values, list, fn);

    if (validationErrors.length) {
        throw new Error(validationErrors.join(' '));
    }

    if (values.length === 1) {
        return getPercentileRank(values[0], list, fn);
    }

    return values.map(function (val) {
        return getPercentileRank(val, list, fn);
    });
}

module.exports = percentileRank;