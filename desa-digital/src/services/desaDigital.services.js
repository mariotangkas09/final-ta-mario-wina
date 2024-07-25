import { API_URL } from "../constants/apiConstans";
import { API_WISATA } from "../constants/apiConstans";

export const fetchDusun = async () => {
     try {
       const response = await fetch(`${API_URL}/dusun`);
       const data = await response.json();
       return data;
     } catch (error) {
       console.error('Error fetching dusun:', error);
       throw error;
     }
   };

   export const getBerita = async () => {
    try {
      const response = await fetch(`${API_URL}/berita`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching berita:', error);
      throw error;
    }
  };
  export const getPengumuman = async () => {
    try {
      const response = await fetch(`${API_URL}/pengumuman`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching pengumuman:', error);
      throw error;
    }
  };

  export const getPengumumanById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/pengumuman/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching pengumuman by ID:', error);
      throw error;
    }
  };
  export const getBeritaById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/berita/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching berita by ID:', error);
      throw error;
    }
  };

  export const getOrganisasi = async (id) => {
    try {
      const response = await fetch(`${API_URL}/organisasi`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching pengumuman by ID:', error);
      throw error;
    }
  };
  export const getOrganisasiById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/organisasi/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching organisasi by ID:', error);
      throw error;
    }
  };
  export const getProfil = async () => {
    try {
        const response = await fetch(`${API_URL}/profile`);
        const text = await response.text(); 
        console.log('Raw response:', text); 
        
        if (response.headers.get('content-type')?.includes('application/json')) {
            const data = JSON.parse(text); 
            return data;
        } else {
            throw new Error('Expected JSON response, received: ' + text);
        }
    } catch (error) {
        console.error('Error fetching profil:', error);
        throw error;
    }
};
export const getPemerintah = async () => {
  try {
      const response = await fetch(`${API_URL}/pemerintah`);
      const text = await response.text(); 
      console.log('Raw response:', text); 
      
      if (response.headers.get('content-type')?.includes('application/json')) {
          const data = JSON.parse(text); 
          return data;
      } else {
          throw new Error('Expected JSON response, received: ' + text);
      }
  } catch (error) {
      console.error('Error fetching pemerintah:', error);
      throw error;
  }
};

export const getAgenda= async () => {
  try {
    const response = await fetch(`${API_URL}/agenda`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching agenda:', error);
    throw error;
  }
};
export const getLaporan= async () => {
  try {
    const response = await fetch(`${API_URL}/agenda/laporan`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching laporan:', error);
    throw error;
  }
};
export const getAgendaById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/agenda/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching agenda by ID:', error);
    throw error;
  }
};
export const getlaporanAgendaById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/agenda/laporan/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching agenda by ID:', error);
    throw error;
  }
};


export const getAnggaran= async () => {
  try {
    const response = await fetch(`${API_URL}/anggaran`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching anggaran:', error);
    throw error;
  }
};

export const getAnggaranById= async (id) => {
  try {
    const response = await fetch(`${API_URL}/anggaran/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching anggaran:', error);
    throw error;
  }
};


export const getPenduduk = async () => {
  try {
      const response = await fetch(`${API_URL}/penduduk`);
      const text = await response.text();
      
      // Debug log to check the response
      console.log("Raw response:", text);

      // Attempt to parse JSON only if the response is JSON
      if (response.headers.get('content-type')?.includes('application/json')) {
          return JSON.parse(text);
      } else {
          throw new Error('Response is not JSON');
      }
  } catch (error) {
      console.error('Error fetching penduduk:', error);
      throw error;
  }
};


export const getPendudukById= async (id) => {
  try {
    const response = await fetch(`${API_URL}/penduduk/${id}`);
    const text = await response.text(); 
    console.log('Raw response:', text); 
    
    if (response.headers.get('content-type')?.includes('application/json')) {
        const data = JSON.parse(text); 
        return data;
    } else {
        throw new Error('Expected JSON response, received: ' + text);
    }
} catch (error) {
    console.error('Error fetching penduduk:', error);
    throw error;
}
};

export const getDusun= async () => {
  try {
    const response = await fetch(`${API_URL}/dusun`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dusun:', error);
    throw error;
  }
};
export const getDusunById= async (id) => {
  try {
    const response = await fetch(`${API_URL}/dusun/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dusun:', error);
    throw error;
  }
};


//Desa-Wisata-C-API

export const getWisata = async () => {
  try {
      const response = await fetch(`${API_WISATA}/ObjekWisata`);
      const text = await response.text();
      
      // Debug log to check the response
      console.log("Raw response:", text);

      // Attempt to parse JSON only if the response is JSON
      if (response.headers.get('content-type')?.includes('application/json')) {
          return JSON.parse(text);
      } else {
          throw new Error('Response is not JSON');
      }
  } catch (error) {
      console.error('Error fetching wisata:', error);
      throw error;
  }
};



export const getUmkmMakanan= async () => {
  try {
    const response = await fetch(`${API_WISATA}/umkm/makanan`);
    const text = await response.text();
    
    // Debug log to check the response
    console.log("Raw response:", text);

    // Attempt to parse JSON only if the response is JSON
    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
} catch (error) {
    console.error('Error fetching umkm:', error);
    throw error;
}
};

export const getUmkmSuvenir= async () => {
  try {
    const response = await fetch(`${API_WISATA}/umkm/souvenir`);
    const text = await response.text();
    
    // Debug log to check the response
    console.log("Raw response:", text);

    // Attempt to parse JSON only if the response is JSON
    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
} catch (error) {
    console.error('Error fetching umkm:', error);
    throw error;
}
};
export const getUmkmPakaian= async () => {
  try {
    const response = await fetch(`${API_WISATA}/umkm/pakaian`);
    const text = await response.text();
    
    console.log("Raw response:", text);

    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
} catch (error) {
    console.error('Error fetching umkm:', error);
    throw error;
}
};

export const getUmkmMakananDetail = async (id) => {
  try {
    const response = await fetch(`${API_WISATA}/umkm/produk/${id}`);
    const text = await response.text();

    // Debug log to check the response
    console.log("Raw response for detail:", text);

    // Attempt to parse JSON only if the response is JSON
    if (response.headers.get('content-type')?.includes('application/json')) {
      return JSON.parse(text);
    } else {
      throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching umkm detail:', error);
    throw error;
  }
};


export const getWisataById= async (id) => {
  try {
    const response = await fetch(`${API_WISATA}/ObjekWisata/${id}`);
    const text = await response.text();
    
    console.log("Raw response:", text);

    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
} catch (error) {
    console.error('Error fetching wisata:', error);
    throw error;
}
};


export const getIbdah= async () => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/rumah-ibadah`);
    const text = await response.text();
    
    console.log("Raw response:", text);

    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
} catch (error) {
    console.error('Error fetching fasilitas:', error);
    throw error;
}
};
export const getHomestay = async () => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/homestay`);
    const text = await response.text();
    
    console.log("Raw response:", text); 

    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching fasilitas:', error);
    throw error;
  }
};

export const getKesehatan = async () => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/fasilitas-kesehatan`);
    const text = await response.text();
    
    console.log("Raw response:", text); 

    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching fasilitas:', error);
    throw error;
  }
};
export const getRumahMakan = async () => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/rumah-makan`);
    const text = await response.text();
    
    console.log("Raw response:", text); 

    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching rumah-makan:', error);
    throw error;
  }
};
export const getBank = async () => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/bank`);
    const text = await response.text();
    
    console.log("Raw response:", text); 

    if (response.headers.get('content-type')?.includes('application/json')) {
        return JSON.parse(text);
    } else {
        throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching bank:', error);
    throw error;
  }
};

export const getIbadahDetail = async (id) => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/rumah-ibadah/${id}`);
    const text = await response.text();

    // Debug log to check the response
    console.log("Raw response for detail:", text);

    // Attempt to parse JSON only if the response is JSON
    if (response.headers.get('content-type')?.includes('application/json')) {
      return JSON.parse(text);
    } else {
      throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching fasilitas detail:', error);
    throw error;
  }
};



export const getUmkmDetail = async (id) => {
  try {
    const response = await fetch(`${API_WISATA}/umkm/produk/${id}`);
    const text = await response.text();

    // Debug log to check the response
    console.log("Raw response for detail:", text);

    // Attempt to parse JSON only if the response is JSON
    if (response.headers.get('content-type')?.includes('application/json')) {
      return JSON.parse(text);
    } else {
      throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching fasilitas detail:', error);
    throw error;
  }
};



export const getHomestayDetail = async (id) => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/homestay/${id}`);
    const text = await response.text();
    
    console.log("Raw response:", text);

    if (response.headers.get('content-type')?.includes('application/json')) {
        const data = JSON.parse(text);
        console.log("Parsed response:", data);
        return data;
    } else {
        throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching wisata:', error);
    throw error;
  }
};

export const getKesehatanDetail = async (id) => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/fasilitas-kesehatan/${id}`);
    const text = await response.text();
    
    console.log("Raw response:", text);

    if (response.headers.get('content-type')?.includes('application/json')) {
        const data = JSON.parse(text);
        console.log("Parsed response:", data);
        return data;
    } else {
        throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching kesehatan:', error);
    throw error;
  }
};
export const getRumahMakanDetail = async (id) => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/rumah-makan/${id}`);
    const text = await response.text();
    
    console.log("Raw response:", text);

    if (response.headers.get('content-type')?.includes('application/json')) {
        const data = JSON.parse(text);
        console.log("Parsed response:", data);
        return data;
    } else {
        throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching RM:', error);
    throw error;
  }
};

export const getBankDetail = async (id) => {
  try {
    const response = await fetch(`${API_WISATA}/fasilitas/bank/${id}`);
    const text = await response.text();
    
    console.log("Raw response:", text);

    if (response.headers.get('content-type')?.includes('application/json')) {
        const data = JSON.parse(text);
        console.log("Parsed response:", data);
        return data;
    } else {
        throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error('Error fetching bank:', error);
    throw error;
  }
};


