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
                                childName: 'Chấm công',
                                routeName: 'attendance-employee'
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
                name: 'profile',
                routeName: 'empinfo',
            },
            {
                name: 'payroll',
                routeName: 'payroll',
            },
            {
                name: 'request ot',
                routeName: 'request-ot',
            },
            {
                name: 'request off',
                routeName: 'request-off',
            },
            {
                name: 'Danh sách nhân viên',
                routeName: 'hrempmanagement',
            },
            {
                name: 'Employee View',
                routeName: 'emp-information',
            }
        ]
    }

    static profileEmpMenu() {
        return [
            {
                name: 'information',
                routeName: 'emp-information',
            },
            {
                name: 'degree',
                routeName: 'emp-degree',
            },
            {
                name: 'allowance',
                routeName: 'emp-allowance',
            },
            {
                name: 'department',
                routeName: 'emp-department',
            },
            {
                name: 'skill',
                routeName: 'emp-skill',
            },
            {
                name: 'experience',
                routeName: 'emp-experience',
            },
            {
                name: 'contract',
                routeName: 'emp-contract',
            },
            {
                name: 'dependant',
                routeName: 'emp-dependant',
            }
        ]
    }
}