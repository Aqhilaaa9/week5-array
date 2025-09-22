const namaTeman =[
    "Qhaulan", 
    "Syaqhila", 
    "Aqhilaaa", 
    "F1D022152", 
    "Volly", 
    "Basket", 
    "Renang", 
    "Masak", 
    "090803", 
    "Qhila"];
  
  // Map() 
  const namaUpper = namaTeman.map(nama => nama.toUpperCase());
  console.log("Map() \n Semua nama huruf besar: ", namaUpper);
  
  // Filter()
  const namaPanjang = namaTeman.filter(nama => nama.length > 5);
  console.log("\nFilter()  \n Nama lebih dari 5 huruf: ", namaPanjang);
  
  // Reduce() 
  const totalPanjang = namaTeman.reduce((total, nama) => total + nama.length, 0);
  console.log("\nReduce() \nTotal panjang semua nama: ", totalPanjang);
  
  // Find() 
  const cariNamaA = namaTeman.find(nama => nama.startsWith("A"));
  console.log("\nFind() \nNama dengan huruf depan 'A':", cariNamaA);
  
  // Some()
  const adaLebih10 = namaTeman.some(nama => nama.length > 10);
  console.log("\nSome() \nApakah ada nama lebih dari 10 huruf?", " \n==> ", adaLebih10);
  
  // Every()
  const semuaLebih3 = namaTeman.every(nama => nama.length > 3);
  console.log("\nEvery() \nApakah semua nama lebih dari 5 huruf?", "\n==> ",  semuaLebih3);
  