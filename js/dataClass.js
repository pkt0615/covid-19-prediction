class Data {
    constructor(dataset, country) {
        this.dataset = dataset;
        this.country = country;
    }
    
    /* TO-DOS */
    // 지역 문제 해결
    data() {
        for (let data of this.dataset) {
            if (data["Country/Region"] == this.country) {
            return data;
            }
        }
        for (let data of this.dataset) {
            if (data["Country/Region"].match(this.country)) {
            return data;
            }
        }
    }

    dataKeys() {
        let data_key = [];
        for (let key of Object.keys(this.data())) {
            if (!(key.match(/[a-z]/gi))) {
                data_key.push(key);
            }
        }
        return data_key;
    }

    dataNumbers() {
        const data_key = this.dataKeys();
        let data_numbers = [];
        for (let key of data_key) {
            data_numbers.push(Math.round(this.data()[key]));
        }
        return data_numbers;
    }

    dataDailyNumbers() {
        const data_numbers = this.dataNumbers();
        let daily_numbers = [1,];
        
        try {
            for (let i = 0; i < data_numbers.length; i++) {
                daily_numbers.push(data_numbers[i+1] - data_numbers[i])
            }
        } catch(err) {
            console.error(err)
        }
        return daily_numbers;
    }

    dataSum() {
        const data_numbers = this.dataNumbers();
        return data_numbers[data_numbers.length-1];
    }
}