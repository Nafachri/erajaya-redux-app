const initialState = {
  employee: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "employeeAdded":
      return {
        employee: [...state.employee, action.payload],
      };
    case "employeeEdit":
      // const { No, Nama, TanggalLahir, Alamat, NoHP } = action.payload;
      // const existingEmployee = state.employee.filter(
      //   (employee) => employee.No === No
      // );
      // if (existingEmployee) {
      return {
        // ...state.employee,
        employee: [
          ...state.employee.filter(
            (employee) => employee.No !== action.payload.No
          ),
          action.payload,
          // {
          //   No: No,
          //   Nama: Nama,
          //   TanggalLahir: TanggalLahir,
          //   Alamat: Alamat,
          //   NoHP: NoHP,
          // },
        ],
      };
    // }

    case "employeeDelete":
      return {
        employee: [
          ...state.employee.filter((item) => item.No !== action.payload),
        ],
      };
    default:
      return state;
  }
}

export default reducers;
