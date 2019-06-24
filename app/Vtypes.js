Ext.apply(Ext.form.field.VTypes, {
    customPass: function(val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText: 'Not a valid password. Length must be at least 6 characters and maximum of 20. Password must contain one digit, one letter lowercase, one letter uppercase, one special symbol @#$% and between 6 and 20 characters.',

	daterange: function(val, field) {
		var date = field.parseDate(val);

        if ( !date ) {
            return false;
        }
        if ( field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime())) ) {
            var start = field.up('form').down('#' + field.startDateField);
            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;
        }
        else if ( field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime())) ) {
            var end = field.up('form').down('#' + field.endDateField);
            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }
        return true;
    },
    daterangeText: 'Start date must be less than end date',
});