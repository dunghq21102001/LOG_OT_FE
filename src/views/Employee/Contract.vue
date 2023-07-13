<template>
    <div class="bg-white">
        <div class="w-[90%] mx-auto mt-10">
            <EasyDataTable :headers="headers" :items="list" header-text-direction="center" :table-class-name="currentTheme"
                body-text-direction="center">
            </EasyDataTable>
        </div>
    </div>
</template>
<script>
import API from '../../API'
import swal from '../../utilities/swal2'
export default {
    data() {
        return {
            list: [],
            headers: [
                { text: "ContractCode", value: "contractCode", width: 140, },
                { text: "File", value: "file", width: 140, },
                { text: "StartDate", value: "startDate", width: 140, },
                { text: "EndDate", value: "endDate", width: 140, },
                { text: "Job", value: "job", width: 140, },
                { text: "BasicSalary", value: "basicSalary", width: 140, },
                { text: "Status", value: "status", width: 140, },
                { text: "PercentDeduction", value: "percentDeduction", width: 140, },
                { text: "SalaryType", value: "salaryType", width: 140, },
                { text: "ContractType", value: "contractType", width: 140, },
                { text: "IsPersonalTaxDeduction", value: "isPersonalTaxDeduction", width: 140, },
                { text: "InsuranceType", value: "insuranceType", width: 140, },
                { text: "InsuranceAmount", value: "insuranceAmount", width: 140, },
            ]
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            API.getListEmployeeContractByUsername(this.$route.params.username)
                .then(res => {
                    this.list = res.data.listItem.items
                    console.log(res);
                })
                .catch(err => swal.error(err))
        }
    }
}
</script>