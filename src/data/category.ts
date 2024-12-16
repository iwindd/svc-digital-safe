export interface Category{
  id: number;
  label: string;
  color: string;
}

export default [
  {
    id: 1,
    label: 'ความผิดเกี่ยวกับคอมพิวเตอร์',
    color: 'blue',
  },
  {
    id: 2,
    label: 'พนักงานเจ้าหน้าที่',
    color: 'green'
  }
] as Category[];
