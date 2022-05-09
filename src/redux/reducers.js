const initialState = {
  employee: [
    // {
    //   No: 1,
    //   Nama: "Naufal Al-Fachri",
    //   TanggalLahir: "30-11-1998",
    //   Alamat: "Tanjung Priok Jakarta Utara",
    //   NoHP: "085883749172",
    // },
  ],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "employeeAdded":
      return {
        employee: [...state.employee, action.payload],
      };
    case "employeeEdit":
      const { No, Nama, TanggalLahir, Alamat, NoHP } = action.payload;
      const existingEmployee = state.employee.filter(
        (employee) => employee.No === No
      );
      if (existingEmployee) {
        return {
          employee: [
            {
              No: No,
              Nama: Nama,
              TanggalLahir: TanggalLahir,
              Alamat: Alamat,
              NoHP: NoHP,
            },
          ],
        };
      }

    case "employeeDelete":
      return {
        employee: [
          ...state.employee.filter((item, index) => item.No !== action.payload),
        ],
      };
    default:
      return state;
  }
}

// const reducers = createSlice({
//   name: "employee",
//   initialState,
//   reducers: {
//     employeeAdded(state, action) {
//       state.push(action.payload);
//     },
//     employeeUpdated(state, action) {
//       const { No, Nama, TanggalLahir, Alamat, NoHP } = action.payload;
//       const existingEmployee = state.find((employee) => employee.No === No);
//       if (existingEmployee) {
//         existingEmployee.Nama = Nama;
//         existingEmployee.TanggalLahir = TanggalLahir;
//         existingEmployee.Alamat = Alamat;
//         existingEmployee.NoHP = NoHP;
//       }
//     },
//     employeeDeleted(state, action) {
//       const { No } = action.payload;
//       const existingEmployee = state.find((employee) => employee.No === No);
//       if (existingEmployee) {
//         return state.filter((employee) => employee.No !== No);
//       }
//     },
//   },
// });

// export const { employeeAdded, employeeDeleted, employeeUpdated } =
//   reducers.actions;

export default reducers;
