

// export function Card({ children }) {
//     return (
//       <div className="max-w-md w-full mx-auto my-auto p-6  bg-white border border-gray-200 rounded-xl shadow-xl flex justify-center items-center">
//         {children}
//       </div>
//     );
// }


export function Card({ children }) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="max-w-sm w-full mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-xl">
          {children}
        </div>
      </div>
    );
  }
  