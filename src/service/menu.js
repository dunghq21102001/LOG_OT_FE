export default class menu {
    static menuList() {
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
                                childName: 'Nhật ký làm thêm',
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
                                childName: 'Quản lí thời gian làm việc',
                                routeName: 'configWorkDay',
                            },
                            {
                                childName: 'Phụ cấp theo phòng ban',
                                routeName: 'departmentAllowance',
                            },
                            {
                                childName: 'Hệ số lương',
                                routeName: 'coefficient',
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
                        itemName: 'Apps',
                        isShow: false,
                        isShowExpand: false,
                        children: [
                            
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
                name: 'Information',
                routeName: 'emp-information',
            },
            {
                name: 'Degree',
                routeName: 'emp-degree',
            },
            // {
            //     name: 'allowance',
            //     routeName: 'emp-allowance',
            // },
            {
                name: 'Department',
                routeName: 'emp-department',
            },
            {
                name: 'Skill',
                routeName: 'emp-skill',
            },
            // {
            //     name: 'experience',
            //     routeName: 'emp-experience',
            // },
            {
                name: 'Contract',
                routeName: 'emp-contract',
            },
            {
                name: 'Dependant',
                routeName: 'emp-dependant',
            }
        ]
    }
}