const category = [
    {
        label:'Loại phim:',
        selected :'- Tất cả -',
        select:[
            {
                value:'Phim lẻ'
            },
            {
                value:'Phim bộ'
            },
        ]
    },{
        label:'Thể loại:',
        selected :'- Tất cả -',
        select:[
            {
                value:'Âm nhạc'
            },
            {
                value:'Chiến tranh'
            },{
                value:'Hành động'
            },{
                value:'Khoa học viễn tưởng'
            },
        ]
    },{
        label:'Quốc gia:',
        selected :'- Tất cả -',
        select:[
            {
                value:'Việt Nam'
            },
            {
                value:'Hàn Quốc'
            },{
                value:'Thái Lan'
            },{
                value:'Ấn Độ'
            },
        ]
    },{
        label:'Năm:',
        selected :'- Tất cả -',
        select:[
            {
                value:'2023'
            },
            {
                value:'2022'
            },{
                value:'2021'
            },{
                value:'2020'
            },{
                value:'2019'
            }
        ]
    },{
        label:'Thời lượng:',
        selected :'- Tất cả -',
        select:[
            {
                value:'Dưới 30 phút'
            },
            {
                value:'30 phút - 1 tiếng'
            },{
                value:'1 tiếng trở lên'
            },{
                value:'Trên 2 tiếng'
            },
        ]
    },{
        label:'Sắp xếp:',
        selected: 'Ngày cập nhật',
        select:[
            {
                value:'Ngày phát hành'
            },{
                value:'Điểm đánh giá'
            }
        ]
    }
]


function Navbar() {
    return <div className="flex flex-wrap bg-[#091C2D] rounded-sm">
        {category.map((item,index) => (
            <div key={index} className="flex-grow p-3 ">
                <label htmlFor="" className="mb-2 block font-medium text-white">{item.label} </label>
                <select className="block w-full px-[11px] py-[7px] rounded-[4px] cursor-pointer min-w-[200px]  active:border-[#428bca] active:border-2 active:shadow-[0 0 0 0.125em rgba(66,139,202,.25)] outline-none" name="" id="">
                    <option value={item.selected} defaultValue={''}>{item.selected}</option>
                    {item.select.map((option,index) => (<option key={index} value={option.value} >{option.value}</option>))}
                </select>
            </div>
        ))}
        
    </div>;
}

export default Navbar;