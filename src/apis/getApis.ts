export const GetPage = async (slug:String) => {
    const res = await fetch(`http://localhost:1337/api/page/${slug}`);
    if (!res.ok) throw new Error("failed");
    return res.json();
  };
  
export const getAllPages = async () => {
    const res = await fetch(`http://localhost:1337/api/pagesName`);
    if (!res.ok) throw new Error("failed");
    
    return res.json();
  };
  