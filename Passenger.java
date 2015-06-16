
public class Passenger {
	private String first_name;
	private String last_name;
	
	public Passenger(String first, String last){
		first_name = first;
		last_name = last;
	}
	
	public void setLast(String last){
		last_name = last;
	}
	
	public void setFirst(String first){
		first_name = first;
	}
	
	public String getLast(){
		return last_name;
	}
	
	public String getFirst(){
		return first_name;
	}
	
	public String toString(){
		return "Passenger name is " + first_name + last_name;
	}
}
