import { useState } from "react";
import { FinancialRecordType } from "../../classes/FinancialRecordType";

type FinancialRecordFormProps = {
    type: FinancialRecordType;
}

export const FinancialRecordForm: React.FC<FinancialRecordFormProps> = (props) => {

    const [showForm, setShowForm] = useState(false)

    return (
        <>
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
          <div className="px-4 py-4 mb-0 bg-white rounded-t cursor-pointer lg:w-12/12" onClick={() => setShowForm(!showForm)}>
            <div className="flex justify-between text-center">
              <h6 className="text-xl font-bold text-blueGray-700">Formulário</h6>
              <i
                className={`mt-1 cursor-pointer text-xl fas ${showForm ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down'} `}
              ></i>
            </div>
          </div>
          <div className={`${showForm ? '' : 'hidden'} flex-auto px-4 py-2 pt-0 lg:px-2`}>
            <form>
              <div className="flex flex-wrap mt-6 mb-6">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Categorias
                    </label>
                    <select
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    >
                        <option>Selecione as categorias</option>
                        <option>Férias</option>
                        <option>Salário</option>
                        <option>Restituição IR</option>
                    </select>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Data
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue="Lucky"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Valor
                    </label>
                    <input
                      type="number" min="1" step="any"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-12/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Descrição
                    </label>
                    <textarea
                        rows={3}
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        defaultValue=""
                    />
                  </div>
                </div>
                <div className="flex flex-row-reverse w-full px-4 pt-4">
                    <button
                        className="w-full px-0 py-2 mb-1 text-base font-bold text-center text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none disabled:opacity-50 bg-lightBlue-600 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="submit"
                        >
                        <i className="mr-2 fas fa-cloud-upload-alt"></i> Salvar
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}