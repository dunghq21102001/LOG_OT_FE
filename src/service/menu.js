export default class menu {
    static menuList() {
        return [
            {
                id: 1,
                name: 'menu',
                items: [
                    {
                        iconName: 'dashboardIcon',
                        itemName: 'Quản lý',
                        isShow: true,
                        isShowExpand: false,
                        children: [
                            {
                                childName: 'Dashboard',
                                routeName: 'home'
                            },
                            {
                                childName: 'Nhân Viên',
                                routeName: 'employee-list'
                            },
                            {
                                childName: 'Thai Sản',
                                routeName: 'maternity-employee'
                            },
                            {
                                childName: 'Tăng ca',
                                routeName: 'overtime-log'
                            },
                            {
                                childName: 'Phụ thuộc',
                                routeName: 'dependent-list'
                            },
                            {
                                childName: 'Phòng ban',
                                routeName: 'department',
                            },
                            {
                                childName: 'Vị trí',
                                routeName: 'position',
                            },
                            {
                                childName: 'Trình độ',
                                routeName: 'level',
                            },
                            {
                                childName: 'Phụ cấp',
                                routeName: 'allowance',
                            },
                            {
                                childName: 'Hợp đồng',
                                routeName: 'employeeContract',
                            },
                            {
                                childName: 'Phụ cấp theo phòng ban',
                                routeName: 'departmentAllowance',
                            },
                            {
                                childName: 'Quản lý lương',
                                routeName: 'payslip',
                            },
                            {
                                childName: 'Ngày làm việc hàng năm',
                                routeName: 'annualWorkingDay',
                            },
                            {
                                childName: 'Quản lí chấm công',
                                routeName: 'attendanceManager',
                            },
                            {
                                childName: 'Trợ cấp',
                                routeName: 'subsidize',
                            }
                        ]
                    },
                    {
                        iconName: 'managementItem',
                        itemName: 'Cấu hình',
                        isShow: false,
                        isShowExpand: false,
                        children: [
                            {
                                childName: 'Mặc định',
                                routeName: 'configDefault',
                            },
                            {
                                childName: 'Wifi',
                                routeName: 'config-wifi',
                            },
                            {
                                childName: 'Ca làm',
                                routeName: 'configWorkDay',
                            },
                            {
                                childName: 'Hệ số lương',
                                routeName: 'coefficient',
                            },
                            {
                                childName: 'Mức lương tối thiểu theo vùng',
                                routeName: 'regionalMinimumWage',
                            },
                            {
                                childName: 'Thuế thu nhập',
                                routeName: 'configTaxIncome',
                            },
                        ]
                    },
                    {
                        iconName: 'reportItem',
                        itemName: 'Báo cáo',
                        isShow: false,
                        isShowExpand: false,
                        children: [
                            {
                                childName: 'Công việc',
                                routeName: 'job-report',
                            },   
                        ]
                    },
                ]
            }
        ]
    }

    static menuListEmp() {
        return [
            {
                id: 1,
                name: 'menu',
                items: [
                    {
                        iconName: 'dashboardIcon',
                        itemName: 'Dashboards',
                        isShow: true,
                        isShowExpand: false,
                        children: [
                            {
                                childName: 'Chấm công',
                                routeName: 'attendance-employee'
                            },
                            {
                                childName: 'Nhận yêu cầu',
                                routeName: 'accept-request'
                            },
                            {
                                childName: 'Xin nghỉ',
                                routeName: 'leave-log-emp'
                            }
                        ]
                    }
                ]
            }
        ]
    }

    static profileMenu() {
        return [
            {
                name: 'Thay đổi mật khẩu',
                routeName: 'changePassword'
            },
            // {
            //     name: 'payroll',
            //     routeName: 'payroll',
            // },
            // {
            //     name: 'request ot',
            //     routeName: 'request-ot',
            // },
            // {
            //     name: 'request off',
            //     routeName: 'request-off',
            // },
            // {
            //     name: 'Danh sách nhân viên',
            //     routeName: 'hrempmanagement',
            // },
            // {
            //     name: 'Employee View',
            //     routeName: 'emp-information',
            // }       
        ]
    }

    static profileEmpMenu() {
        return [
            {
                name: 'Thông tin',
                routeName: 'emp-information',
            },
            {
                name: 'Bằng cấp',
                routeName: 'emp-degree',
            },
            // {
            //     name: 'allowance',
            //     routeName: 'emp-allowance',
            // },
            {
                name: 'Phòng ban',
                routeName: 'emp-department',
            },
            // {
            //     name: 'Skill',
            //     routeName: 'emp-skill',
            // },
            // {
            //     name: 'experience',
            //     routeName: 'emp-experience',
            // },
            {
                name: 'Hợp đồng',
                routeName: 'emp-contract',
            },
            {
                name: 'Phụ thuộc',
                routeName: 'emp-dependant',
            }
        ]
    }
}