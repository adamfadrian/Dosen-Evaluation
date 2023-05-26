"use client"

import React, { ChangeEvent, useState } from 'react';

type Nilai = {
  [key: string]: {
    [key: string]: number;
  };
};

export default function Home() {
  const [jsonOutput, setJsonOutput] = useState<string>('');
  const [nilai, setNilai] = useState<Nilai>({
    Mahasiswa_1: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_2: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_3: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_4: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_5: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_6: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_7: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_8: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_9: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },
    Mahasiswa_10: {
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    },

  });

  const handleChange = (mahasiswa: string, aspek: string, value: number) => {
    setNilai((prevNilai) => ({
      ...prevNilai,
      [mahasiswa]: {
        ...prevNilai[mahasiswa],
        [aspek]: value,
      },
    }));
  };


  const handleSimpan = () => {
    const aspekPenilaian: {
      [key: string]: {
        [key: string]: number;
      };
    } = {};

    Object.keys(nilai[Object.keys(nilai)[0]]).forEach((aspek) => {
      aspekPenilaian[aspek] = {};

      Object.keys(nilai).forEach((mahasiswa) => {
        aspekPenilaian[aspek][mahasiswa] = nilai[mahasiswa][aspek];
      });
    });

    setJsonOutput(JSON.stringify(aspekPenilaian, null, 2));
  };
  return (
    <>
      <div className='flex flex-col container mx-auto p-5 w-full'>
        <div className='container bg-dark-alta rounded mb-10  flex justify-center items-center flex-col gap-2 py-5'>
          <h1 className='lg:text-3xl text-lg font-semibold text-white'>Aplikasi Penilaian Mahasiswa</h1>
          <h1 className='lg:text-xl text-lg font-semibold text-white'>Universitas Talentlytica</h1>
        </div>
        <div className='overflow-x-auto'>
          <table className="table w-full drop-shadow border-2">
            <thead>
              <tr className='items-center justify-center mx-auto border text-white'>
                <th className='bg-dark-alta text-center border-2'>Mahasiswa</th>
                <th className='bg-orange-alta text-center border-2'>Aspek Penilaian 1</th>
                <th className='bg-dark-alta text-center border-2'>Aspek Penilaian 2</th>
                <th className='bg-orange-alta text-center border-2'>Aspek Penilaian 3</th>
                <th className='bg-dark-alta text-center border-2'>Aspek Penilaian 4</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(nilai).map(([mahasiswa, aspekNilai]) => (
                <tr key={mahasiswa}>
                  <td className='text-dark-alta font-semibold text-center'>{mahasiswa}</td>
                  {[1, 2, 3, 4].map((aspek) => (
                    <td className='text-center border-2' key={`aspek_${aspek}`}>
                      <select
                        className="select select-xs select-primary max-w-full flex mx-auto"
                        value={aspekNilai[`aspek_penilaian_${aspek}`]}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          handleChange(mahasiswa, `aspek_penilaian_${aspek}`, parseInt(e.target.value))
                        }
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((nilai) => (
                          <option key={nilai} value={nilai}>
                            {nilai}
                          </option>
                        ))}
                      </select>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex w-full justify-end mt-5'>
          <button className='btn btn-sm btn-wide bg-orange-alta hover:bg-orange-alta outline-none border-none text-white hover:scale-105' onClick={handleSimpan}>Simpan</button>
        </div>
        {jsonOutput && (
          <div className='flex flex-col gap-2'>
            <h2 className='lg:text-2xl font-semibold'>Aspek Nilai Mahasiswa :</h2>
            <pre className='text-lg'>{jsonOutput}</pre>
          </div>
        )}
      </div>
    </>
  )
}
